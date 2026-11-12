"use client";

import React, { useState } from "react";
import { X, Download, Upload, Copy, Check, ShieldCheck, Terminal } from "lucide-react";

interface DataModalProps {
  isOpen: boolean;
  onClose: () => void;
  exportData: () => string;
  importData: (json: string) => boolean;
}

export function DataModal({ isOpen, onClose, exportData, importData }: DataModalProps) {
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleCopy = () => {
    const data = exportData();
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const data = exportData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trackchest-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const ok = importData(importText.trim());
    if (ok) {
      setImportStatus("success");
      setTimeout(() => {
        onClose();
        setImportStatus("idle");
        setImportText("");
      }, 1200);
    } else {
      setImportStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-void-900 border-2 border-amber-500/40 rounded-[2rem] max-w-lg w-full p-6 text-white shadow-[0_0_50px_rgba(245,158,11,0.25)] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-void-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-tech text-xl font-bold uppercase tracking-wide">
              DATA ARCHIVE &amp; TELEMETRY BACKUP
            </h3>
            <p className="text-xs text-slate-400">100% Encrypted client-side LocalStorage. Zero cloud telemetry.</p>
          </div>
        </div>

        {/* 导出区域 */}
        <div className="p-4 rounded-2xl bg-void-850 border border-slate-800 mb-5">
          <h4 className="font-tech text-sm uppercase tracking-wider font-bold text-amber-300 mb-1">
            01. EXPORT PROFILE SNAPSHOT
          </h4>
          <p className="text-xs text-slate-400 mb-3.5">
            Save your match records and personal best milestones before clearing your mobile browser cache.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={handleCopy}
              className="flex-1 py-2.5 px-3 rounded-xl bg-void-800 hover:bg-void-700 border border-slate-700 font-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "COPIED TO CLIPBOARD" : "COPY JSON"}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-tech text-xs tracking-wider uppercase font-black flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-md shadow-amber-500/20"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD FILE</span>
            </button>
          </div>
        </div>

        {/* 导入区域 */}
        <div className="p-4 rounded-2xl bg-void-850 border border-slate-800">
          <h4 className="font-tech text-sm uppercase tracking-wider font-bold text-amber-300 mb-1">
            02. RESTORE SNAPSHOT
          </h4>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="Paste your exported TrackChest JSON string here..."
            className="w-full h-24 bg-void-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-amber-400 mb-3"
          />
          <div className="flex items-center justify-between">
            {importStatus === "success" && (
              <span className="font-tech text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center">
                <Check className="w-4 h-4 mr-1" /> RESTORED SUCCESSFULLY!
              </span>
            )}
            {importStatus === "error" && (
              <span className="font-tech text-xs uppercase tracking-wider text-rose-400 font-bold">
                INVALID JSON PAYLOAD!
              </span>
            )}
            {importStatus === "idle" && <span />}
            <button
              onClick={handleImport}
              disabled={!importText.trim()}
              className="py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed font-tech text-xs uppercase tracking-wider font-bold flex items-center space-x-2 transition-all active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span>APPLY RESTORE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
