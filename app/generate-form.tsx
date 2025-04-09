import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { AlertCircle, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

function GenerateForm() {
   const router = useRouter();
   const [projectIdea, setProjectIdea] = useState("");
   const { isConnected, address } = useAppKitAccount();
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   async function handleSubmit() {
      if (!projectIdea) {
         setError("Please enter a project idea.");
         return;
      }

      if (!isConnected || !address) {
         setError("Please connect your wallet.");
         return;
      }

      const signature = localStorage.getItem("signature");
      if (!signature) {
         setError("Please sign the message to proceed.");
         return;
      }

      setLoading(true);
      try {
         const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputUser: projectIdea, signature }),
         });

         const data = await response.json();

         if (data.error) {
            setError(data.error);
         } else {
            router.push("/result/" + data.id);
         }
      } catch (error) {
         console.error("Error:", error);
         setError("An error occurred while generating the project.");
      }
      setLoading(false);
   }

   return (
      <div className="mx-auto mb-8 max-w-2xl rounded-xl bg-cyberteal-surface p-6 shadow-cyber">
         {error && (
            <Alert variant="destructive" className="text-start mb-4">
               <AlertCircle className="h-4 w-4" />
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>{error}</AlertDescription>
            </Alert>
         )}
         <div className="mb-4">
            <Textarea
               placeholder="Describe your project idea…"
               className="h-16 border-cyberteal-primary/30 bg-cyberteal-background text-lg text-cyberteal-text placeholder:text-cyberteal-muted/70 focus:border-cyberteal-primary focus:ring-cyberteal-primary"
               value={projectIdea}
               onChange={(e) => setProjectIdea(e.target.value)}
            />
         </div>
         <Button
            onClick={handleSubmit}
            disabled={!isConnected || loading}
            className="cyber-button h-12 w-full rounded-md text-lg shadow-cyber hover:shadow-cyber-hover text-black"
         >
            <span className="cyber-button-content flex items-center justify-center">
               {!loading ? (
                  <Sparkles className="mr-2 h-5 w-5" />
               ) : (
                  <TailSpin
                     visible={true}
                     height="25"
                     width="25"
                     color="black"
                     ariaLabel="tail-spin-loading"
                     radius="1"
                     wrapperStyle={{}}
                     wrapperClass="mr-3"
                  />
               )}
               {loading ? "Please wait.." : "Process the idea"}
            </span>
         </Button>
      </div>
   );
}

export default GenerateForm;
