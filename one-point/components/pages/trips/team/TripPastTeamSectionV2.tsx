"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { TrippastBlocksTeam } from "@/tina/__generated__/types"


export function TripPastTeamSectionV2(props: TrippastBlocksTeam) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid md:px-6 lg:grid-cols-2 xl:gap-8 xl:grid-cols-4">
        <div className="flex flex-col gap-2 md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Team</h2>
          <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            The team behind the innovation. We&apos;re passionate about creating the best experiences.
          </p>
        </div>
        <div className="grid gap-6 md:col-start-2 md:col-span-3 lg:gap-8">
          <div className="flex flex-col gap-2 md:gap-1">
            <Card
              className={`w-full flex flex-col md:flex-row items-start md:items-center p-0 ${
                selectedCard === "alice" ? "bg-muted" : ""
              }`}
              onMouseEnter={() => setSelectedCard("alice")}
              onMouseLeave={() => setSelectedCard(null)}
              onClick={() => setSelectedCard(selectedCard === "alice" ? null : "alice")}
            >
              <img
                src="/placeholder.svg"
                alt="Avatar"
                width={120}
                height={120}
                className="rounded-tl-lg rounded-tr-lg md:rounded-bl-lg object-cover border border-gray-200 w-full md:w-72 dark:border-gray-800"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />

              <div className="flex-1 grid gap-1 p-4 md:p-6">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">Alice Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
                </div>
                <div className={`space-y-2 text-base/relaxed ${selectedCard === "alice" ? "block" : "hidden"}`}>
                  <p>
                    Alice is an avid hiker and loves to spend her weekends exploring nature trails. She&apos;s also a
                    fan of mystery novels and enjoys solving puzzles in her free time.
                  </p>
                </div>
              </div>
            </Card>
            <Card
              className={`w-full flex flex-col md:flex-row items-start md:items-center p-0 ${
                selectedCard === "mark" ? "bg-muted" : ""
              }`}
              onMouseEnter={() => setSelectedCard("mark")}
              onMouseLeave={() => setSelectedCard(null)}
              onClick={() => setSelectedCard(selectedCard === "mark" ? null : "mark")}
            >
              <img
                src="/placeholder.svg"
                alt="Avatar"
                width="120"
                height="120"
                className="rounded-tl-lg rounded-tr-lg md:rounded-bl-lg object-cover border border-gray-200 w-full md:w-72 dark:border-gray-800"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="flex-1 grid gap-1 p-4 md:p-6">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">Mark Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
                </div>
                <div className={`space-y-2 text-base/relaxed ${selectedCard === "mark" ? "block" : "hidden"}`}>
                  <p>
                    Mark is a coffee enthusiast and enjoys experimenting with different brewing methods. He&apos;s also
                    a music lover and plays the guitar in a local band during the weekends.
                  </p>
                </div>
              </div>
            </Card>
            <Card
              className={`w-full flex flex-col md:flex-row items-start md:items-center p-0 ${
                selectedCard === "emily" ? "bg-muted" : ""
              }`}
              onMouseEnter={() => setSelectedCard("emily")}
              onMouseLeave={() => setSelectedCard(null)}
              onClick={() => setSelectedCard(selectedCard === "emily" ? null : "emily")}
            >
              <img
                src="/placeholder.svg"
                alt="Avatar"
                width="120"
                height="120"
                className="rounded-tl-lg rounded-tr-lg md:rounded-bl-lg object-cover border border-gray-200 w-full md:w-72 dark:border-gray-800"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="flex-1 grid gap-1 p-4 md:p-6">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">Emily White</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer</p>
                </div>
                <div className={`space-y-2 text-base/relaxed ${selectedCard === "emily" ? "block" : "hidden"}`}>
                  <p>
                    Emily is a travel enthusiast and enjoys immersing herself in different cultures. She&apos;s also a
                    foodie and loves trying out new and exotic dishes from around the world.
                  </p>
                </div>
              </div>
            </Card>
            <Card
              className={`w-full flex flex-col md:flex-row items-start md:items-center p-0 ${
                selectedCard === "alex" ? "bg-muted" : ""
              }`}
              onMouseEnter={() => setSelectedCard("alex")}
              onMouseLeave={() => setSelectedCard(null)}
              onClick={() => setSelectedCard(selectedCard === "alex" ? null : "alex")}
            >
              <img
                src="/placeholder.svg"
                alt="Avatar"
                width="120"
                height="120"
                className="rounded-tl-lg rounded-tr-lg md:rounded-bl-lg object-cover border border-gray-200 w-full md:w-72 dark:border-gray-800"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="flex-1 grid gap-1 p-4 md:p-6">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">Alex Brown</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
                </div>
                <div className={`space-y-2 text-base/relaxed ${selectedCard === "alex" ? "block" : "hidden"}`}>
                  <p>
                    Alex is a fitness enthusiast and enjoys going for runs in the park. He&apos;s also a movie buff and
                    spends his weekends catching up on the latest Hollywood blockbusters.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}