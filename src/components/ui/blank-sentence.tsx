/** The sentence with its gap filled in: what a picked option or an answer would read. */
export const fillGap = (prompt: string, word: string) => prompt.replace("___", word);

/**
 * A gapped sentence ("I ___ from Vietnam."): the gap shows the word picked so far, so choosing an option
 * visibly fills it in, or stays an empty line until then.
 */
export function BlankSentence({
  prompt,
  word,
  className = "",
  as: Tag = "p",
}: {
  prompt: string;
  word: string | null;
  className?: string;
  as?: "p" | "h3";
}) {
  const [before, after = ""] = prompt.split("___");
  return (
    <Tag lang="en" className={className}>
      {before}
      <span className={`mx-1 inline-block min-w-16 border-b-[3px] border-ink px-1 text-center font-bold ${word ? "rounded-t-md bg-sun-soft" : ""}`}>
        {word ?? <span className="sr-only">chỗ trống</span>}
      </span>
      {after}
    </Tag>
  );
}
