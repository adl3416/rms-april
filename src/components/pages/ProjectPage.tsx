import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
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
    Calendar
  } from "@/components/ui/calendar";
  import {
    Popover,
    PopoverTrigger,
    PopoverContent
  } from "@/components/ui/popover";
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
  } from "@/components/ui/select";
  import {
    Button
  } from "@/components/ui/button";
  import {
    CalendarIcon
  } from "lucide-react";
  import {
    format
  } from "date-fns";
  import {
    useState
  } from "react";
  
  export default function ProjectPage() {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date());
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>New Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label>Project Name</Label>
            <Input placeholder="E.g. HR Dashboard" />
          </div>
  
          <div className="space-y-1">
            <Label>Description</Label>
            <Textarea placeholder="Brief description of the project..." />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
  
            <div className="space-y-1">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
  
          <div className="space-y-1">
            <Label>Assign Team</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose a team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="qa">QA</SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          <Button type="submit">Create Project</Button>
        </CardContent>
      </Card>
    );
  }
  