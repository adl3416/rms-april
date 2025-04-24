import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StaffingForm() {
  return (
    <Card className="max-w-xl mx-auto mt-10 p-6 shadow-md">
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Employee Name</Label>
            <Input id="name" placeholder="Jane Doe" />
          </div>

          <div>
            <Label htmlFor="role">Role</Label>
            <Input id="role" placeholder="Developer, Designer, etc." />
          </div>

          <div>
            <Label htmlFor="availability">Availability (%)</Label>
            <Input id="availability" type="number" placeholder="100" />
          </div>

          <Button type="submit" className="mt-4">Save</Button>
        </form>
      </CardContent>
    </Card>
  )
}
