"use client";

import React, { useState } from "react";
import { X, Download, Upload, Copy, Check, Shield } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Chest Data Backup & Restore</h3>
            <p className="text-xs text-slate-400">Your counts are strictly stored in your local browser</p>
          </div>
        </div>

        {/* 导出区域 */}
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 mb-5">
          <h4 className="text-sm font-semibold text-slate-200 mb-2">Export Your Counts</h4>
          <p className="text-xs text-slate-400 mb-3">
            Save your all-time records and daily history before switching devices or clearing browser cache.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={handleCopy}
              className="flex-1 py-2 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied JSON!" : "Copy to Clipboard"}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* 导入区域 */}
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-200 mb-2">Import / Restore Backup</h4>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="Paste your trackchest JSON export string here..."
            className="w-full h-24 bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs font-mono text-slate-300 placeholder-slate-600 focus:outline-none focus:border-amber-500 mb-3"
          />
          <div className="flex items-center justify-between">
            {importStatus === "success" && (
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                <Check className="w-3.5 h-3.5 mr-1" /> Restored successfully!
              </span>
            )}
            {importStatus === "error" && (
              <span className="text-xs text-rose-400 font-semibold">
                Invalid JSON format. Please verify!
              </span>
            )}
            {importStatus === "idle" && <span />}
            <button
              onClick={handleImport}
              disabled={!importText.trim()}
              className="py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold flex items-center space-x-1.5 transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span>Apply Backup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
