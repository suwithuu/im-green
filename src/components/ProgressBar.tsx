interface ProgressBarProps {
    current: number;
    total: number;
}

export default function ProgressBar({
                                        current,
                                        total,
                                    }: ProgressBarProps) {
    const percentage = Math.min((current / total) * 100, 100);

    return (
        <div className="px-5 pt-5">
            <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          진단 진행
        </span>

                <span className="text-xs font-semibold text-emerald-700">
          {current}/{total}
        </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div
                    className="h-full rounded-full bg-emerald-600 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}