import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <h1>Bulbul Bhai Shop</h1>
      <p>Welcome to our online shop. <Button className="bg-black text-white">Shop Now</Button>
        <Card>Name</Card>
      </p>
    </main>
  );
}