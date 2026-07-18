interface BottomButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    secondaryLabel?: string;
    onSecondaryClick?: () => void;
}

export default function BottomButton({
                                         label,
                                         onClick,
                                         disabled = false,
                                         secondaryLabel,
                                         onSecondaryClick,
                                     }: BottomButtonProps) {
    return (
        <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[430px] border-t border-slate-100 bg-white px-5 pt-4 pb-[calc(16px+env(safe-area-inset-bottom))]">
            <div className="flex gap-3">
                {secondaryLabel && onSecondaryClick && (
                    <button
                        type="button"
                        onClick={onSecondaryClick}
                        className="h-14 flex-1 rounded-2xl border border-slate-200 bg-white text-base font-semibold text-slate-700 active:bg-slate-50"
                    >
                        {secondaryLabel}
                    </button>
                )}

                <button
                    type="button"
                    onClick={onClick}
                    disabled={disabled}
                    className={[
                        "h-14 flex-1 rounded-2xl text-base font-semibold transition",
                        disabled
                            ? "cursor-not-allowed bg-slate-200 text-slate-400"
                            : "bg-emerald-600 text-white active:bg-emerald-700",
                    ].join(" ")}
                >
                    {label}
                </button>
            </div>
        </div>
    );
}