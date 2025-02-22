import { Button } from "@/components/ui/button";
import { Building2, UserRound } from "lucide-react";

type UserSelectionType = "company" | "jobSeeker";

interface UserTypeFormProps {
  onSelect: (type: UserSelectionType) => void;
}

export default function UserTypeForm({ onSelect }: UserTypeFormProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">
          Welcome! Please select your user type
        </h2>
        <p className="text-muted-foreground">
          Choose your user type to continue
        </p>
      </div>

      <div className="grid gap-4">
        <Button
          onClick={() => onSelect("company")}
          className="w-full h-auto p-6 items-center gap-5 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
          variant="outline"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Building2 className="size-6 text-primary" />
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-lg">Company/Organization</h3>
            <p className="text-muted-foreground">Find your next employee</p>
          </div>
        </Button>
        <Button
          onClick={() => onSelect("jobSeeker")}
          className="w-full h-auto p-6 items-center gap-5 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
          variant="outline"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UserRound className="size-6 text-primary" />
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-lg">Job Seeker</h3>
            <p className="text-muted-foreground">Find your next job</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
