export const removeHtmlTags = (data: string) => {
  return data.replace(/<[^>]*>/g, '');
};

export const removeMarkdown = (markdown: string) => {
  return markdown?.replace(/\*\*(.*?)\*\*/g, '$1');
};
