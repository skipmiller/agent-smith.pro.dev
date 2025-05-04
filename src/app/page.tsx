import Link from 'next/link';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-5xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold mb-6">Agent Smith</h1>
        <p className="text-xl mb-8">A professional environment for agent-based applications</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className="mr-4">Learn More</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>About Agent Smith</DialogTitle>
              <DialogDescription>
                This project provides a professional environment for creating agent-based applications with modern web technologies.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>The environment includes advanced configuration settings for agent creation, API integration capabilities, and tooling for AI-powered applications.</p>
            </div>
          </DialogContent>
        </Dialog>
        
        <Button variant="default" size="lg">Get Started</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card>
          <CardHeader>
            <CardTitle>Agent Framework</CardTitle>
            <CardDescription>Building blocks for intelligent agents</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Create sophisticated AI agents with reusable components, state management, and integration capabilities.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Learn More</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>AI Integration</CardTitle>
            <CardDescription>Claude and other LLM capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Seamlessly integrate with Claude and other large language models for intelligent agent behaviors.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">View Integrations</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tool Integration</CardTitle>
            <CardDescription>Connect with external APIs and services</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Integrate your agents with various tools, APIs, and data sources for enhanced capabilities.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Tool Examples</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Secure & Scalable</CardTitle>
            <CardDescription>Enterprise-ready infrastructure</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Built with security and scalability in mind for deploying production-grade agent applications.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Deployment Guide</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 