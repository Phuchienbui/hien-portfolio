import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CONTENT_EN } from "../../content/content.en";
import { Project } from "../../models/project";
import { ProjectCard } from "./project-card";

const PROJECT: Project = {
  id: "memory-duel",
  name: "Memory Duel",
  image: "",
  tags: ["TypeScript"],
  githubUrl: "https://github.com/Phuchienbui/memory-duel",
  liveUrl: "",
};

describe("ProjectCard", () => {
  let fixture: ComponentFixture<ProjectCard>;
  let element: HTMLElement;

  /** Renders the card with the given project. */
  async function render(project: Project): Promise<void> {
    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput("project", project);
    fixture.componentRef.setInput("description", "Beschreibung");
    fixture.componentRef.setInput("labels", CONTENT_EN.portfolio.card);
    element = fixture.nativeElement;
    await fixture.whenStable();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCard] }).compileComponents();
  });

  it("should create", async () => {
    await render(PROJECT);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("renders the GitHub link safely in a new tab with the project name", async () => {
    await render(PROJECT);
    const link = element.querySelector<HTMLAnchorElement>(".project-card__link");
    expect(link?.getAttribute("rel")).toBe("noopener noreferrer");
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.getAttribute("aria-label")).toContain("Memory Duel");
  });

  it("does not render a live button without a live URL", async () => {
    await render(PROJECT);
    expect(element.querySelector(".project-card__link--live")).toBeNull();
  });

  it("renders no links at all for a private project", async () => {
    await render({ ...PROJECT, githubUrl: "" });
    expect(element.querySelector(".project-card__links")).toBeNull();
  });

  it("shows a placeholder while no preview image exists", async () => {
    await render(PROJECT);
    expect(element.querySelector(".project-card__placeholder")).toBeTruthy();
  });
});
