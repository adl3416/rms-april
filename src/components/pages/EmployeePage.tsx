import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Input
  } from "@/components/ui/input";
  import {
    Label
  } from "@/components/ui/label";
  import {
    Textarea
  } from "@/components/ui/textarea";
  import {
    CalendarIcon
  } from "lucide-react";
  import {
    Button
  } from "@/components/ui/button";
  import {
    format
  } from "date-fns";
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
  } from "@/components/ui/popover";
  import {
    Calendar
  } from "@/components/ui/calendar";
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
  import {
    useState
  } from "react";
  
  export default function EmployeePage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
  
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>New Employee</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label>First Name</Label>
              <Input placeholder="John" />
            </div>
            <div className="space-y-1">
              <Label>Last Name</Label>
              <Input placeholder="Doe" />
            </div>
          </div>
  
          <div className="space-y-1">
            <Label>Position</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          <div className="space-y-1">
            <Label>Email</Label>
            <Input type="email" placeholder="john.doe@example.com" />
          </div>
  
          <div className="space-y-1">
            <Label>Phone</Label>
            <Input type="tel" placeholder="+90 500 000 0000" />
          </div>
  
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
  
          <div className="space-y-1">
            <Label>Notes</Label>
            <Textarea placeholder="Optional notes..." />
          </div>
  
          <Button type="submit">Add Employee</Button>
        </CardContent>
      </Card>
    );
  }
  