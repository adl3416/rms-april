import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
  
  type StaffingCriteria = {
    startDate: string
    endDate: string
    availability: string
  }
  
  type Props = {
    value: StaffingCriteria
    onChange: (newValue: StaffingCriteria) => void
  }
  
  export default function StaffingCriteriaForm({ value, onChange }: Props) {
    const handleChange = (key: keyof StaffingCriteria, val: string) => {
      onChange({ ...value, [key]: val })
    }
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Staffing Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Start Date</Label>
            <Input
              type="date"
              value={value.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
          </div>
  
          <div>
            <Label>End Date</Label>
            <Input
              type="date"
              value={value.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
            />
          </div>
  
          <div>
            <Label>Availability</Label>
            <Select
              value={value.availability}
              onValueChange={(val) => handleChange("availability", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="75">75</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    )
  }
  