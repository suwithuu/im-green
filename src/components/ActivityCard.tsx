import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface ActivityCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    selected?: boolean;
    disabled?: boolean;
    metadata?: string;
    onClick?: () => void;
}

export default function ActivityCard({
                                         title,
                                         description,
                                         icon: Icon,
                                         selected = false,
                                         disabled = false,
                                         metadata,
                                         onClick,
                                     }: ActivityCardProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={[
                "relative w-full rounded-2xl border p-4 text-left transition",
                selected
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-slate-200 bg-white",
                disabled
                    ? "cursor-not-allowed opacity-50"
                    : "active:scale-[0.99]",
            ].join(" ")}
        >
            <div className="flex gap-4">
                <div
                    className={[
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        selected
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-600",
                    ].join(" ")}
                >
                    <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-slate-900">{title}</h3>

                        {disabled && (
                            <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-500">
                준비 중
              </span>
                        )}

                        {selected && !disabled && (
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                                <Check className="h-4 w-4" />
                            </div>
                        )}
                    </div>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                        {description}
                    </p>

                    {metadata && (
                        <p className="mt-3 text-xs font-medium text-slate-500">
                            {metadata}
                        </p>
                    )}
                </div>
            </div>
        </button>
    );
}