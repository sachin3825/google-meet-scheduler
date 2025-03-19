"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { login } from "@/lib/actions/auth";
const SignInCard = () => {
  return (
    <div className="flex h-[80dvh] items-center justify-center">
      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full flex items-center gap-2"
            variant="outline"
            onClick={() => login()}
          >
            <FcGoogle size={20} /> Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInCard;
