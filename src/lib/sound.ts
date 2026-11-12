/**
 * Web Audio API 纯代码合成轻量音效系统
 * 零外部 mp3 资源依赖，低至 0ms 延迟，完全离线可用
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * 宝箱开启打击音效 (短促爽朗的金币与弹簧共鸣)
 */
export function playChestClickSound(isMuted: boolean = false) {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  
  // 基础共鸣振荡器
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(420, now);
  osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);

  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.12);

  // 金色高频点缀微音
  const oscHigh = ctx.createOscillator();
  const gainHigh = ctx.createGain();

  oscHigh.type = "sine";
  oscHigh.frequency.setValueAtTime(1200, now);
  oscHigh.frequency.exponentialRampToValueAtTime(1800, now + 0.06);

  gainHigh.gain.setValueAtTime(0.08, now);
  gainHigh.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  oscHigh.connect(gainHigh);
  gainHigh.connect(ctx.destination);

  oscHigh.start(now);
  oscHigh.stop(now + 0.08);
}

/**
 * 里程碑达成号角/清脆和弦音
 */
export function playMilestoneSound(isMuted: boolean = false) {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    const now = ctx.currentTime + idx * 0.08;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  });
}
