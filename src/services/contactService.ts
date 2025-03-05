
import { toast } from "@/hooks/use-toast";

/**
 * Send a contact message to the agent
 */
export const contactAgent = (
  name: string, 
  email: string, 
  message: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  setLoading(true);
  
  // Simulate API call with timeout
  setTimeout(() => {
    setLoading(false);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. Our agent will contact you soon.",
      variant: "default"
    });
  }, 1000);
};
