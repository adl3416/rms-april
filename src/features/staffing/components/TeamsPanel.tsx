import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Pencil, Trash2, Share2, Star, StarOff } from "lucide-react"
  import { useState } from "react"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  
  const teams = [
    "All Professional Services",
    "Demo Services",
    "Project A",
    "Project B",
    "Tech"
  ]
  
  export default function TeamsPanel() {
    const [tab, setTab] = useState<"my" | "create">("my")
    const [teamName, setTeamName] = useState("")
    const [remark, setRemark] = useState("")
  
    const handleSaveDynamic = () => {
      console.log("Save as Dynamic Team:", { teamName, remark })
    }
  
    const handleSaveStatic = () => {
      console.log("Save as Static Team:", { teamName, remark })
    }
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Teams</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Tab buttons */}
          <div className="flex mb-4 border-b">
            <Button
              variant={tab === "my" ? "default" : "ghost"}
              className="flex-1 rounded-none"
              onClick={() => setTab("my")}
            >
              My Teams
            </Button>
            <Button
              variant={tab === "create" ? "default" : "ghost"}
              className="flex-1 rounded-none"
              onClick={() => setTab("create")}
            >
              Create New Teams
            </Button>
          </div>
  
          {tab === "my" ? (
            <>
              <div className="space-y-3">
                {teams.map((team) => (
                  <div
                    key={team}
                    className="flex justify-between items-center border p-2 rounded-md"
                  >
                    <span>{team}</span>
                    <div className="flex gap-2">
                      <Share2 className="w-4 h-4 cursor-pointer text-muted-foreground" />
                      <Star className="w-4 h-4 cursor-pointer text-yellow-500" />
                      <Pencil className="w-4 h-4 cursor-pointer text-blue-500" />
                      <Trash2 className="w-4 h-4 cursor-pointer text-red-500" />
                    </div>
                  </div>
                ))}
              </div>
  
              <div className="flex gap-2 mt-4">
                <Button className="w-full" variant="destructive">
                  Set selected teams as DEFAULT
                </Button>
                <Button className="w-full" variant="secondary">
                  <StarOff className="w-4 h-4 mr-1" />
                  Withdraw Default Flag
                </Button>
              </div>
            </>
          ) : (
            // Form for creating new team
            <div className="space-y-4 border p-4 rounded-md">
              <div>
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  placeholder="Enter team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
  
              <div>
                <Label htmlFor="remark">Remark (optional)</Label>
                <Input
                  id="remark"
                  placeholder="Optional remark"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>
  
              <div className="flex justify-between gap-2 pt-2">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white w-1/2"
                  onClick={handleSaveDynamic}
                >
                  + Save as "Dynamic Team"
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white w-1/2"
                  onClick={handleSaveStatic}
                >
                  + Save as "Static Team"
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
  