// src/data/mockData.ts
import type { DiagnosisStatus } from "../types";

export const extractedData = {
    electricity: {
        annualUsage: "200,000kWh",
        annualCost: "5,950만 원",
        contractPower: "300kW",
    },
    currentEquipment: {
        name: "공기압축기",
        model: "AC-75",
        ratedPower: "75kW",
        manufacturedYear: "2014년",
    },
    newEquipment: {
        model: "ECO-55",
        ratedPower: "55kW",
        reductionRate: "21%",
        cost: "5,000만 원",
    },
    impact: {
        electricitySaved: "42,000kWh",
        carbonReduced: "19tCO₂e",
        costSaved: "1,250만 원",
    },
};

export const diagnosisItems: Array<{
    title: string;
    status: DiagnosisStatus;
    description: string;
}> = [
    {
        title: "활동 기준",
        status: "pass",
        description:
            "에너지효율 개선을 위한 설비 교체 활동에 해당합니다.",
    },
    {
        title: "인정 기준",
        status: "pass",
        description:
            "기존 설비 대비 에너지 사용량이 21% 감소할 것으로 예상됩니다.",
    },
    {
        title: "배제 기준",
        status: "pending",
        description:
            "폐설비의 적법한 처리방식을 확인할 자료가 부족합니다.",
    },
    {
        title: "보호 기준",
        status: "pass",
        description:
            "확인된 보호 기준 관련 특이사항이 없습니다.",
    },
];