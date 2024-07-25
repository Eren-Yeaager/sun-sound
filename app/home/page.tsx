import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="bg-darkGray min-h-screen flex items-start justify-center gap-4">
      <div className="flex items-start gap-4 mt-10 w-full max-w-xl">
        <Input className="flex-grow" />

        <Button variant="outline" size="lg">
          Filters
        </Button>
      </div>
      <div className="flex items-center mt-10 ml-20">
        <Button variant="default" size="lg">
          Login
        </Button>
      </div>
    </div>
  );
}
