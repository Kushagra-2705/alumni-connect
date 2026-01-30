import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GraduationCap, Eye, EyeOff, Mail, Lock, User, BookOpen, Briefcase } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student" as "student" | "alumni",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signUp(
      formData.email,
      formData.password,
      formData.name,
      formData.role
    );

    if (error) {
      toast({
        title: "Signup failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Account created!",
        description: "Please check your email to verify your account before signing in.",
      });
      navigate("/login");
    }

    setIsLoading(false);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-shadow duration-300">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">AlumniHub</span>
        </Link>

        <Card className="bg-card/80 backdrop-blur-xl border-border/50 shadow-elevated">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-foreground">Create Account</CardTitle>
            <CardDescription className="text-muted-foreground">
              Join the community and unlock your network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => updateField("password", e.target.value)}
                    className="pl-10 pr-10 bg-background/50 border-border/50 focus:border-primary"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">Minimum 8 characters</p>
              </div>

              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-foreground">I am a...</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => updateField("role", value)}
                  className="grid grid-cols-2 gap-3"
                >
                  <Label
                    htmlFor="student"
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      formData.role === "student"
                        ? "border-primary bg-primary/10"
                        : "border-border/50 bg-background/50 hover:border-border"
                    }`}
                  >
                    <RadioGroupItem value="student" id="student" className="sr-only" />
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      formData.role === "student" ? "bg-primary/20" : "bg-muted"
                    }`}>
                      <BookOpen className={`w-5 h-5 ${
                        formData.role === "student" ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div>
                      <p className={`font-medium ${
                        formData.role === "student" ? "text-foreground" : "text-muted-foreground"
                      }`}>Student</p>
                      <p className="text-xs text-muted-foreground">Currently studying</p>
                    </div>
                  </Label>

                  <Label
                    htmlFor="alumni"
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      formData.role === "alumni"
                        ? "border-primary bg-primary/10"
                        : "border-border/50 bg-background/50 hover:border-border"
                    }`}
                  >
                    <RadioGroupItem value="alumni" id="alumni" className="sr-only" />
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      formData.role === "alumni" ? "bg-primary/20" : "bg-muted"
                    }`}>
                      <Briefcase className={`w-5 h-5 ${
                        formData.role === "alumni" ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div>
                      <p className={`font-medium ${
                        formData.role === "alumni" ? "text-foreground" : "text-muted-foreground"
                      }`}>Alumni</p>
                      <p className="text-xs text-muted-foreground">Graduate</p>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              {formData.role === "alumni" && (
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-xs text-accent">
                    🎓 Alumni accounts require verification. You'll receive an email to confirm your alumni status.
                  </p>
                </div>
              )}

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-muted-foreground text-xs mt-6">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
