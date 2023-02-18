export const articleSplit = article => {
  const articleArr = article.split(' ');

  if (articleArr.length > 40) {
    return articleArr.slice(0, 40).join(' ') + '...';
  }
  return articleArr.join(' ');
};
export const titleSplit = title => {
  const titleArr = title.split(' ');

  if (titleArr.length > 8) {
    return titleArr.slice(0, 8).join(' ') + '...';
  }
  return titleArr.join(' ');
};
