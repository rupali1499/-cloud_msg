import React, { useState } from "react";
import styles from './text.module.css';


const Text = () => {
  const [readmore, setReadmore] = useState(false);
  const string_data = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptates impedit
  laborum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores at eos et animi placeat veniam dicta
  laborum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores at eos et animi placeat veniam dicta
  laborum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores at eos et animi placeat veniam dicta
  laborum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores at eos et animi placeat veniam dicta
  laborum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores at eos et animi placeat veniam dicta
  laborum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores at eos et animi placeat veniam dicta
  laborum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores at eos et animi placeat veniam dicta
  deleniti. Omnis reprehenderit quibusdam voluptas doloribus repudiandae odio`
  const extraContent = <div>
    <p className={styles.extraContent}>{string_data}.</p>
  </div>
  const show = <p className={styles.show} style={{ boxOrient: 'vertical', lineClamp: 2 }} >{string_data}.</p>
  const linkName = readmore ? 'Read Less...' : 'Read more...';
  return (
    <div className={styles.App}>
      {readmore ? extraContent : show}
      <a className={styles.readMoreLink} onClick={() => { setReadmore(!readmore) }}>
        {linkName}</a>
    </div>
  )
}

export default Text;