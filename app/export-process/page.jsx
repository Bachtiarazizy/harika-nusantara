import ExportProcessComponent from "@/components/export-process/export-process-component";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata("exportProcess");

export default function ExportProcessPage() {
  return <ExportProcessComponent />;
}
