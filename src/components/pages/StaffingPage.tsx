import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function StaffingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [teamList, setTeamList] = useState([
    { id: 1, name: "Frontend Team" },
    { id: 2, name: "Backend Team" },
    { id: 3, name: "QA Team" },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* FORM */}
      <Card>
        <CardHeader>
          <CardTitle>Staffing Selection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Dropdown */}
          <div className="space-y-1">
            <Label>Role</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="qa">QA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-1">
            <Label>Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {/* Input */}
          <div className="space-y-1">
            <Label>Notes</Label>
            <Input placeholder="Additional notes..." />
          </div>

          <Button type="submit">Submit</Button>
        </CardContent>
      </Card>

      {/* TEAMS */}
      <Card>
        <CardHeader>
          <CardTitle>Available Teams</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {teamList.map((team) => (
              <li key={team.id} className="p-2 bg-muted rounded border">
                {team.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
