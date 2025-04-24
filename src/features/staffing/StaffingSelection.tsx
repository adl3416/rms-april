import { useState } from "react"


import StaffingCriteriaForm from "./components/StaffingCriteriaForm"
import EmployeeCriteriaForm from "./components/EmployeeCriteriaForm"
import ProjectCriteriaForm from "./components/ProjectCriteriaForm"
import SelectionPanel from "./components/SelectionPanel"
import TeamsPanel from "./components/TeamsPanel"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button"
  
  export default function StaffingSelection() {
    const [staffing, setStaffing] = useState({
      startDate: "",
      endDate: "",
      availability: "0",
    })
  
    const [employee, setEmployee] = useState({
      name: "",
      department: "",
      level: "",
    })
  
    const [project, setProject] = useState({
      projectName: "",
      clientName: "",
      projectPartner: "",
      jobType: "",
    })
  
    const [selectionText, setSelectionText] = useState("")
  
    const handleClearSelection = () => {
      setSelectionText("")
    }
  
    const handleSearch = () => {
      console.log("SEARCH CRITERIA", {
        staffing,
        employee,
        project,
        selectionText,
      })
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sol Panel: Formlar */}
        <div className="space-y-4">
          <Accordion type="multiple" className="w-full" defaultValue={["staffing", "employee"]}>
            <AccordionItem value="staffing">
              <AccordionTrigger>Staffing Criteria</AccordionTrigger>
              <AccordionContent>
                <StaffingCriteriaForm value={staffing} onChange={setStaffing} />
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="employee">
              <AccordionTrigger>Employee Criteria</AccordionTrigger>
              <AccordionContent>
                <EmployeeCriteriaForm value={employee} onChange={setEmployee} />
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="project">
              <AccordionTrigger>Project Criteria</AccordionTrigger>
              <AccordionContent>
                <ProjectCriteriaForm value={project} onChange={setProject} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
  
          <Button onClick={handleSearch} className="w-full">
            Search
          </Button>
        </div>
  
        {/* Sağ Panel: Seçim ve Takım */}
        <div className="space-y-4">
          <Accordion type="multiple" className="w-full" defaultValue={["selection", "teams"]}>
            <AccordionItem value="selection">
              <AccordionTrigger>Selection</AccordionTrigger>
              <AccordionContent>
                <SelectionPanel
                  value={selectionText}
                  onChange={setSelectionText}
                  onClear={handleClearSelection}
                />
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="teams">
              <AccordionTrigger>Teams</AccordionTrigger>
              <AccordionContent>
                <TeamsPanel />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    )
  }