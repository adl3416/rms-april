import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  
  type ProjectCriteria = {
    projectName: string
    clientName: string
    projectPartner: string
    jobType: string
  }
  
  type Props = {
    value: ProjectCriteria
    onChange: (newValue: ProjectCriteria) => void
  }
  
  export default function ProjectCriteriaForm({ value, onChange }: Props) {
    const handleChange = (key: keyof ProjectCriteria, val: string) => {
      onChange({ ...value, [key]: val })
    }
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Project Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Project Name</Label>
            <Input
              value={value.projectName}
              onChange={(e) => handleChange("projectName", e.target.value)}
            />
          </div>
  
          <div>
            <Label>Client Name</Label>
            <Input
              value={value.clientName}
              onChange={(e) => handleChange("clientName", e.target.value)}
            />
          </div>
  
          <div>
            <Label>Project Partner</Label>
            <Input
              value={value.projectPartner}
              onChange={(e) => handleChange("projectPartner", e.target.value)}
            />
          </div>
  
          <div>
            <Label>Job Type</Label>
            <Input
              value={value.jobType}
              onChange={(e) => handleChange("jobType", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
    )
  }
  