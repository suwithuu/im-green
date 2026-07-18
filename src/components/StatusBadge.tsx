import type { DiagnosisStatus } from "../types";

interface StatusBadgeProps {
    status: DiagnosisStatus;
}

const statusLabel: Record<DiagnosisStatus, string> = {
    pass: "충족",
    pending: "확인 필요",
    fail: "미충족",
};

const statusClassName: Record<DiagnosisStatus, string> = {
    pass: "bg-emerald-50 text-emerald-700",
    pending: "bg-amber-50 text-amber-700",
    fail: "bg-rose-50 text-rose-700",
};

export default function StatusBadge({
                                        status,
                                    }: StatusBadgeProps) {
    return (
        <span
            className={[
                "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold",
                statusClassName[status],
            ].join(" ")}
        >
      {statusLabel[status]}
    </span>
    );
}