import { Sparkles } from "lucide-react";
import AppHeader from "../components/AppHeader";
import BottomButton from "../components/BottomButton";
import DocumentCard from "../components/DocumentCard";
import ProgressBar from "../components/ProgressBar";
import type {
    DocumentKey,
    UploadedDocuments,
} from "../types";

interface UploadScreenProps {
    documents: UploadedDocuments;
    setDocuments: React.Dispatch<
        React.SetStateAction<UploadedDocuments>
    >;
    onRegisterSamples: () => void;
    onBack: () => void;
    onNext: () => void;
}

export default function UploadScreen({
                                         documents,
                                         setDocuments,
                                         onRegisterSamples,
                                         onBack,
                                         onNext,
                                     }: UploadScreenProps) {
    const requiredKeys: DocumentKey[] = [
        "electricityBill",
        "currentEquipment",
        "newEquipmentQuote",
    ];

    const completedRequiredCount = requiredKeys.filter(
        (key) => Boolean(documents[key]),
    ).length;

    const canProceed =
        completedRequiredCount === requiredKeys.length;

    const updateDocument = (
        key: DocumentKey,
        fileName: string | null,
    ) => {
        setDocuments((prev) => ({
            ...prev,
            [key]: fileName,
        }));
    };

    return (
        <section className="min-h-dvh bg-slate-50 pb-32">
            <AppHeader onBack={onBack} showHelp />
            <ProgressBar current={2} total={4} />

            <div className="px-5 pt-7">
                <h2 className="text-2xl font-bold leading-8 text-slate-900">
                    진단에 필요한 자료를
                    <br />
                    등록해 주세요
                </h2>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-white px-4 py-3">
          <span className="text-sm font-medium text-slate-600">
            필수자료 등록 현황
          </span>

                    <strong className="text-sm text-emerald-700">
                        {completedRequiredCount}/3
                    </strong>
                </div>

                <div className="mt-4 space-y-3">
                    <DocumentCard
                        title="전기 고지서"
                        description="최근 전력 사용량과 전기요금을 확인합니다."
                        required
                        fileName={documents.electricityBill}
                        onUpload={(fileName) =>
                            updateDocument("electricityBill", fileName)
                        }
                        onDelete={() =>
                            updateDocument("electricityBill", null)
                        }
                    />

                    <DocumentCard
                        title="기존 설비 명판"
                        description="현재 사용 중인 설비의 모델명과 정격전력을 확인합니다."
                        required
                        type="image"
                        fileName={documents.currentEquipment}
                        onUpload={(fileName) =>
                            updateDocument("currentEquipment", fileName)
                        }
                        onDelete={() =>
                            updateDocument("currentEquipment", null)
                        }
                    />

                    <DocumentCard
                        title="신규 설비 견적서"
                        description="신규 설비의 가격과 효율 정보를 확인합니다."
                        required
                        fileName={documents.newEquipmentQuote}
                        onUpload={(fileName) =>
                            updateDocument("newEquipmentQuote", fileName)
                        }
                        onDelete={() =>
                            updateDocument("newEquipmentQuote", null)
                        }
                    />

                    <DocumentCard
                        title="폐설비 처리계획서"
                        description="미등록 시 배제 기준의 최종 판단이 제한될 수 있습니다."
                        fileName={documents.disposalPlan}
                        onUpload={(fileName) =>
                            updateDocument("disposalPlan", fileName)
                        }
                        onDelete={() =>
                            updateDocument("disposalPlan", null)
                        }
                    />
                </div>

                <button
                    type="button"
                    onClick={onRegisterSamples}
                    className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 text-sm font-semibold text-emerald-700 active:bg-emerald-100"
                >
                    <Sparkles className="h-4 w-4" />
                    샘플 자료 자동 등록
                </button>

                <div className="mt-4 rounded-2xl bg-amber-50 p-4">
                    <p className="text-xs leading-5 text-amber-800">
                        폐설비 처리계획서가 없어도 진단은 진행할 수
                        있지만 일부 기준은 확인이 제한될 수 있습니다.
                    </p>
                </div>
            </div>

            <BottomButton
                label="진단 시작"
                onClick={onNext}
                disabled={!canProceed}
            />
        </section>
    );
}