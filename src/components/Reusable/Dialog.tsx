import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, {  useState } from "react"
import { useDispatch } from "react-redux"
import { addStory } from "../../store/TaskSlice"


export default function DialogDemo() {
  const [openDialog,setOpenDialog]=useState<boolean>(false)
  const [name,setName]=useState<string>("")
  const [summary,setSummary]=useState<string>("")
  const dispatch=useDispatch()

  const handleStoryData=()=>{
    const id=crypto.randomUUID()
    dispatch(addStory({id,name,summary}))
    setOpenDialog(false)
    setName("")
    setSummary("")
  }
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={()=>setOpenDialog(true)}>Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Story</DialogTitle>
          <DialogDescription>
            Add your Story details
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Topic Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={name}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Summary
            </Label>
            <Input
              id="summary"
              className="col-span-3"
              value={summary}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSummary(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleStoryData}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
