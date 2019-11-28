import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styled';

export default ({ url, title }) => {
  const completeURL = `https://mauriciomutte.github.io${url}`;

  return (
    <S.PostComments>
      <ReactDisqusComments 
        shortname="mauriciomutte"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.PostComments>
  );
}
