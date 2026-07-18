// src/types/index.ts

export type Screen =
    | "intro"
    | "activity"
    | "upload"
    | "analyzing"
    | "review"
    | "result";

export type DocumentKey =
    | "electricityBill"
    | "currentEquipment"
    | "newEquipmentQuote"
    | "disposalPlan";

export type UploadedDocuments = Record<DocumentKey, string | null>;

export type DiagnosisStatus = "pass" | "pending" | "fail";