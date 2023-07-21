import { ChevronDown } from "lucide-react";

import { useAppDispatch, useAppSelector } from "../store";
import { play } from "../store/slices/player";
import { Lesson } from "./lesson";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  lessonsAmount: number;
}

export function Module({ lessonsAmount, moduleIndex, title }: ModuleProps) {
  const dispatch = useAppDispatch();

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    return { currentModuleIndex, currentLessonIndex };
  });

  const lessons = useAppSelector((state) => {
    return state.player.course?.modules[moduleIndex].lessons;
  });
  return (
    <Collapsible className="group" defaultOpen={moduleIndex === 0}>
      <CollapsibleTrigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex;

              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  isCurrent={isCurrent}
                  onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                />
              );
            })}
        </nav>
      </CollapsibleContent>
    </Collapsible>
  );
}
