"use client";

import { login, logout } from "@/lib/actions/auth";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  session: any;
}

export default function Header({ session }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-lg font-semibold">
        Meeting <span className="text-blue-400 font-mono">Scheduler</span>
      </h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Image
                src={session.user?.image || "/default-avatar.png"}
                alt="User Image"
                width={32}
                height={32}
                className="rounded-full cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem disabled>
                {session.user?.name || "User"}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => logout()}
                className="text-red-500 cursor-pointer"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => login()}>Login</Button>
        )}
      </div>
    </header>
  );
}
