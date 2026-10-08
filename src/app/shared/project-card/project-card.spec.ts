import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CONTENT_EN } from "../../content/content.en";
import { Project } from "../../models/project";
import { ProjectCard } from "./project-card";

const PROJECT: Project = {
  id: "join",
  name: "Join",
  image: "",
  tags: ["TypeScript", "SCSS"],
  githubUrl: "https://github.com/Phuchienbui/join",
  liveUrl: "",
  comingSoon: false,
};

describe("ProjectCard", () => {
  let fixture: ComponentFixture<ProjectCard>;
  let element: HTMLElement;

  async function render(project: Project): Promise<void> {
    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput("project", project);
    fixture.componentRef.setInput("description", "Beschreibung");
    fixture.componentRef.setInput("labels", CONTENT_EN.portfolio.card);
    element = fixture.nativeElement;
    await fixture.whenStable();
  }

  function card(): HTMLElement {
    return element.querySelector(".project-card") as HTMLElement;
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
    expect(link?.getAttribute("aria-label")).toContain("Join");
  });

  it("does not render a live button without a live URL", async () => {
    await render(PROJECT);
    expect(element.querySelector(".project-card__link--live")).toBeNull();
  });

  it("renders no links at all for a private project", async () => {
    await render({ ...PROJECT, githubUrl: "" });
    expect(element.querySelector(".project-card__links")).toBeNull();
  });

  it("shows a placeholder in the laptop screen while no preview image exists", async () => {
    await render(PROJECT);
    expect(element.querySelector(".project-card__screen .project-card__placeholder")).toBeTruthy();
  });

  it("keeps title, description and tags in the page for screen readers", async () => {
    await render(PROJECT);
    expect(element.querySelector("h3")?.textContent).toBe("Join");
    expect(element.querySelector(".project-card__description")?.textContent).toBe("Beschreibung");
    expect(element.querySelectorAll(".project-card__tags li").length).toBe(2);
  });

  it("hides the tag list for a project without tags", async () => {
    await render({ ...PROJECT, tags: [] });
    expect(element.querySelector(".project-card__tags")).toBeNull();
  });

  it("separates the tags visually without announcing the separators", async () => {
    await render(PROJECT);
    const separators = element.querySelectorAll(".project-card__separator");
    expect(separators.length).toBe(1);
    expect(separators[0].getAttribute("aria-hidden")).toBe("true");
  });

  it("toggles the details with a real button that reports its state", async () => {
    await render(PROJECT);
    const toggle = element.querySelector<HTMLButtonElement>(".project-card__toggle");
    expect(toggle?.getAttribute("aria-expanded")).toBe("false");
    toggle?.click();
    await fixture.whenStable();
    expect(card().classList.contains("project-card--active")).toBe(true);
    expect(toggle?.getAttribute("aria-expanded")).toBe("true");
    toggle?.click();
    await fixture.whenStable();
    expect(card().classList.contains("project-card--active")).toBe(false);
  });

  it("names the toggle button after the project", async () => {
    await render(PROJECT);
    const toggle = element.querySelector(".project-card__toggle");
    expect(toggle?.getAttribute("aria-label")).toContain("Join");
  });

  it("does not toggle the details when a link is tapped", async () => {
    await render(PROJECT);
    const link = element.querySelector<HTMLAnchorElement>(".project-card__link");
    link?.addEventListener("click", (event) => event.preventDefault());
    link?.click();
    await fixture.whenStable();
    expect(card().classList.contains("project-card--active")).toBe(false);
  });

  it("shows the delivered mockup instead of the placeholder laptop", async () => {
    await render({ ...PROJECT, image: "images/projects/example.png" });
    const mockup = element.querySelector<HTMLImageElement>(".project-card__mockup");
    expect(mockup?.getAttribute("alt")).toContain("Join");
    expect(element.querySelector(".project-card__laptop")).toBeNull();
    expect(element.querySelector(".project-card__placeholder")).toBeNull();
  });

  it("uses the mockup again as a decorative, dimmed preview behind the details", async () => {
    await render({ ...PROJECT, image: "images/projects/example.png" });
    const preview = element.querySelector(".project-card__preview");
    expect(preview?.getAttribute("aria-hidden")).toBe("true");
    expect(preview?.querySelector("img")?.getAttribute("alt")).toBe("");
  });

  it("renders no preview layer while there is no image", async () => {
    await render(PROJECT);
    expect(element.querySelector(".project-card__preview")).toBeNull();
  });

  it("shows a coming soon badge for unpublished projects without any link", async () => {
    await render({ ...PROJECT, githubUrl: "", comingSoon: true });
    expect(element.querySelector(".project-card__badge")?.textContent).toContain("Coming soon");
    expect(element.querySelector("a")).toBeNull();
  });

  it("shows no badge for published projects", async () => {
    await render(PROJECT);
    expect(element.querySelector(".project-card__badge")).toBeNull();
  });
});
