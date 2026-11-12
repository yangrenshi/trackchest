"use client";

import React, { useState } from "react";
import { X, Download, Upload, Copy, Check, Database } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#1d1d1d] border border-[#2e2e2e] rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#9a9a9a] hover:text-white rounded-lg hover:bg-[#2b2b2b] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2.5 mb-5">
          <div className="w-9 h-9 rounded-lg bg-[#2b2b2b] flex items-center justify-center text-[#ffc93c]">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold">Data Backup &amp; Restore</h3>
            <p className="text-xs text-[#9a9a9a]">Stored strictly in your local browser</p>
          </div>
        </div>

        {/* 导出 */}
        <div className="p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e] mb-4">
          <h4 className="text-xs font-semibold text-white mb-1">Export Counts</h4>
          <p className="text-xs text-[#9a9a9a] mb-3">
            Save your records before clearing browser cookies or changing devices.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-2 px-3 rounded-lg bg-[#2b2b2b] hover:bg-[#343434] text-xs font-medium flex items-center justify-center space-x-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy JSON"}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 py-2 px-3 rounded-lg bg-[#ffc93c] hover:bg-[#ffd766] text-[#121212] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* 导入 */}
        <div className="p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
          <h4 className="text-xs font-semibold text-white mb-1">Restore Backup</h4>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="Paste your trackchest JSON string here..."
            className="w-full h-20 bg-[#161616] border border-[#2e2e2e] rounded-lg p-2.5 text-xs font-mono text-[#d4d4d4] placeholder-[#555] focus:outline-none focus:border-[#ffc93c] mb-2.5"
          />
          <div className="flex items-center justify-between">
            {importStatus === "success" && (
              <span className="text-xs text-emerald-400 font-medium">Restored!</span>
            )}
            {importStatus === "error" && (
              <span className="text-xs text-rose-400 font-medium">Invalid JSON!</span>
            )}
            {importStatus === "idle" && <span />}
            <button
              onClick={handleImport}
              disabled={!importText.trim()}
              className="py-1.5 px-3 rounded-lg bg-[#2b2b2b] hover:bg-[#343434] disabled:opacity-40 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Restore</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
