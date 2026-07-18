import {
    CheckCircle2,
    FileText,
    Image as ImageIcon,
    Trash2,
    Upload,
} from "lucide-react";

interface DocumentCardProps {
    title: string;
    description: string;
    required?: boolean;
    fileName?: string | null;
    accept?: string;
    type?: "document" | "image";
    onUpload: (fileName: string) => void;
    onDelete: () => void;
}

export default function DocumentCard({
                                         title,
                                         description,
                                         required = false,
                                         fileName,
                                         accept = ".pdf,.jpg,.jpeg,.png",
                                         type = "document",
                                         onUpload,
                                         onDelete,
                                     }: DocumentCardProps) {
    const Icon = type === "image" ? ImageIcon : FileText;

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        onUpload(file.name);
        event.target.value = "";
    };

    return (
        <div
            className={[
                "rounded-2xl border bg-white p-4",
                fileName
                    ? "border-emerald-200"
                    : "border-slate-200",
            ].join(" ")}
        >
            <div className="flex gap-3">
                <div
                    className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                        fileName
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500",
                    ].join(" ")}
                >
                    <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-slate-900">
                            {title}
                        </h3>

                        <span
                            className={[
                                "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                                required
                                    ? "bg-rose-50 text-rose-600"
                                    : "bg-slate-100 text-slate-500",
                            ].join(" ")}
                        >
              {required ? "필수" : "권장"}
            </span>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                        {description}
                    </p>

                    {fileName ? (
                        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-emerald-50 px-3 py-2.5">
                            <div className="flex min-w-0 items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />

                                <span className="truncate text-xs font-medium text-emerald-800">
                  {fileName}
                </span>
                            </div>

                            <button
                                type="button"
                                onClick={onDelete}
                                aria-label={`${title} 삭제`}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 active:bg-white"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <label className="mt-3 flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 active:bg-slate-50">
                            <Upload className="h-4 w-4" />
                            파일 등록

                            <input
                                type="file"
                                accept={accept}
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>
            </div>
        </div>
    );
}