import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyBlockquote, TypographyH1 } from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>The Wider World</TypographyH1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <TypographyBlockquote>
          "Welcome to Liberty City. Capital of Vizgod, one of Rath's Southern
          territories." - Giaccomo
        </TypographyBlockquote>
        <TypographyBlockquote>
          "Our organization is named Northern Wind. Our ancestors told us it
          would lead us home one day." - Lanorella
        </TypographyBlockquote>
        <TypographyBlockquote>
          "Far across the world there is a safe haven: The Hidden City. If you
          ever escape, you can find shelter and allies there." - The Owl
        </TypographyBlockquote>
        <TypographyBlockquote>
          "Humans can kill wolves, they do it all the time." - Velda
        </TypographyBlockquote>
        <TypographyBlockquote>
          "I spent some time living with the Bwarhein. They'e like a sister
          people to the Ulgatians." - Engel Otto
        </TypographyBlockquote>
        <TypographyBlockquote>
          "Of course there are [multiple gardens] all over the world. Some
          Narscillians once said that their homeland has one even bigger than
          all of Helix. Imagine that! A garden as big as a city." - Dunstan
          Prisca
        </TypographyBlockquote>
        <TypographyBlockquote>
          "The devices my father made were intended to save lives. All they did
          was transform the fighting into a more brutal and awful version of
          itself." - Issa
        </TypographyBlockquote>
        <TypographyBlockquote>
          "There are six savage nations. Narscillia, Cumeria, Heia, Kilder,
          Gredora, and..." - Dunstan Prisca
          <br />
          "And Rath." - Nail
          <br />
          "Right. Rath." - Dunstan
        </TypographyBlockquote>
      </div>
    </>
  );
}
