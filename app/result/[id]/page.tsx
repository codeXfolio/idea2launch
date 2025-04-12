"use client";
import ResultsNavbar from "@/components/results-navbar";
import TabResults from "@/components/results-tabs/tab-results";
import ExportSection from "@/components/export-section";
import { mockResults } from "@/data/mock-results";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProjectResults } from "@/types/results";
import CtaSection from "@/components/cta-section";

export default function ResultsPage() {
   const { id } = useParams();
   const [data, setData] = useState<ProjectResults | null>(null);

   useEffect(() => {
      async function fetchData() {
         const data = await fetch("/api/result?id=" + id);
         const json = await data.json();

         setData(json);
         console.log(json);
      }

      fetchData();
   }, []);

   return (
      <div className="min-h-screen bg-cyberteal-background">
         <ResultsNavbar />
         <main className="container mx-auto px-4 pt-8 pb-4">
            <div className="mx-auto max-w-5xl">
               <h1 className="mb-8 bg-gradient-to-r from-cyberteal-primary to-cyberteal-secondary bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                  Your AI-Powered Launch Blueprint
               </h1>

               {data ? (
                  <>
                     <TabResults results={data} />
                     <CtaSection />
                  </>
               ) : (
                  <div className="container py-12 flex justify-center items-center min-h-[50vh]">
                     <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyberteal-primary mx-auto mb-4"></div>
                        <p className="text-muted-foreground">
                           Loading your results...
                        </p>
                     </div>
                  </div>
               )}
            </div>
         </main>
         {data && <ExportSection data={data} id={id as string} />}
      </div>
   );
}
