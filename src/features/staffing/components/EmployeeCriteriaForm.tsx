import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select"
  
  type EmployeeCriteria = {
    name: string
    department: string
    level: string
  }
  
  type Props = {
    value: EmployeeCriteria
    onChange: (newValue: EmployeeCriteria) => void
  }
  
  export default function EmployeeCriteriaForm({ value, onChange }: Props) {
    const handleChange = (key: keyof EmployeeCriteria, val: string) => {
      onChange({ ...value, [key]: val })
    }
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Employee Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="employeeName">Name</Label>
            <Input
              id="employeeName"
              value={value.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Search by name..."
            />
          </div>
  
          <div>
            <Label htmlFor="department">Department</Label>
            <Input
              id="department"
              value={value.department}
              onChange={(e) => handleChange("department", e.target.value)}
              placeholder="e.g. Development, Sales"
            />
          </div>
  
          <div>
            <Label>Level</Label>
            <Select
              value={value.level}
              onValueChange={(val) => handleChange("level", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="junior">Junior</SelectItem>
                <SelectItem value="mid">Mid</SelectItem>
                <SelectItem value="senior">Senior</SelectItem>
                <SelectItem value="lead">Lead</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    )
  }
  