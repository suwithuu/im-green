import {
    AlertTriangle,
    CheckCircle2,
    FilePlus2,
} from "lucide-react";
import AppHeader from "../components/AppHeader";
import BottomButton from "../components/BottomButton";
import DiagnosisCard from "../components/DiagnosisCard";
import ProgressBar from "../components/ProgressBar";
import { diagnosisItems } from "../data/mockData";
import type { DiagnosisStatus } from "../types";

interface ResultScreenProps {
    onAddDocument: () => void;
    onReset: () => void;
}

export default function ResultScreen({
                                         onAddDocument,
                                         onReset,
                                     }: ResultScreenProps) {
    return (
        <section className="min-h-dvh bg-slate-50 pb-36">
            <AppHeader title="진단 결과" showHelp />
            <ProgressBar current={4} total={4} />

            <div className="px-5 pt-7">
                <div className="rounded-3xl bg-amber-50 px-5 py-7 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm">
                        <AlertTriangle className="h-8 w-8" />
                    </div>

                    <span className="mt-5 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            K-택소노미 사전진단
          </span>

                    <h2 className="mt-4 text-2xl font-bold text-slate-900">
                        조건부 적합
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        녹색활동으로 인정될 가능성이 높습니다.
                        <br />
                        일부 자료를 추가하면 최종 확인이 가능합니다.
                    </p>
                </div>

                <div className="mt-7">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">
                            기준별 진단 결과
                        </h3>

                        <span className="text-xs font-semibold text-emerald-700">
              충족 3 · 확인 필요 1
            </span>
                    </div>

                    <div className="mt-4 space-y-3">
                        {diagnosisItems.map((item) => (
                            <DiagnosisCard
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                status={item.status as DiagnosisStatus}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600">
                            <FilePlus2 className="h-5 w-5" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-900">
                                다음으로 필요한 자료
                            </h3>

                            <p className="mt-2 text-sm font-semibold text-amber-800">
                                폐설비 처리계획서
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                자료를 추가하면 배제 기준을 다시 확인할 수
                                있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />

                        <p className="text-sm leading-6 text-slate-600">
                            추가 자료 등록 후 적합 결과로 변경되는 흐름은
                            후속 데모에서 연결할 수 있습니다.
                        </p>
                    </div>
                </div>

                <p className="mt-5 text-xs leading-5 text-slate-400">
                    본 결과는 프로토타입용 사전진단이며 실제
                    K-택소노미 적합성 판단이나 금융심사 결과가
                    아닙니다.
                </p>
            </div>

            <BottomButton
                label="자료 추가 등록"
                onClick={onAddDocument}
                secondaryLabel="처음으로"
                onSecondaryClick={onReset}
            />
        </section>
    );
}