import {
    AlertTriangle,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import type { DiagnosisStatus } from "../types";
import StatusBadge from "./StatusBadge";

interface DiagnosisCardProps {
    title: string;
    description: string;
    status: DiagnosisStatus;
}

export default function DiagnosisCard({
                                          title,
                                          description,
                                          status,
                                      }: DiagnosisCardProps) {
    const iconMap = {
        pass: CheckCircle2,
        pending: AlertTriangle,
        fail: XCircle,
    };

    const iconClassName = {
        pass: "bg-emerald-50 text-emerald-600",
        pending: "bg-amber-50 text-amber-600",
        fail: "bg-rose-50 text-rose-600",
    };

    const Icon = iconMap[status];

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start gap-3">
                <div
                    className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                        iconClassName[status],
                    ].join(" ")}
                >
                    <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-slate-900">
                            {title}
                        </h3>

                        <StatusBadge status={status} />
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
}