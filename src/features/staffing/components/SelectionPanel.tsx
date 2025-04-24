import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Trash2 } from "lucide-react"
  import { Button } from "@/components/ui/button"
  
  type Props = {
    value: string
    onChange: (newVal: string) => void
    onClear: () => void
  }
  
  export default function SelectionPanel({ value, onChange, onClear }: Props) {
    return (
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Selection</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClear}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Label>Profile Name, Id, Email</Label>
          <Input
            placeholder="Search..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </CardContent>
      </Card>
    )
  }
  