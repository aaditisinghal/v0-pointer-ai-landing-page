import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CarbonReceipts } from "@/components/dashboard/carbon-receipts"

export default function ReceiptsPage() {
  return (
    <DashboardLayout>
      <CarbonReceipts />
    </DashboardLayout>
  )
}
