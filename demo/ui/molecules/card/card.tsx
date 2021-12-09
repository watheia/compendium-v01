import { ExternalLink } from '@teambit/design.ui.external-link';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { Heading } from '@watheia/demo.ui.atoms.heading';
import { Text } from '@watheia/demo.ui.atoms.text';
import React from 'react';
import styles from './card.module.scss';

export type CardProps = {
  /**
   * link for the card
   */
  link?: string;
  /**
   * heading for the card
   */
  heading?: string;
  /**
   * text for the card
   */
  text?: string;
  /**
   * command for the copy box component
   */
  command?: string;
};

export function Card({ heading, command, text, link }: CardProps) {
  return (
    <div className={styles.card}>
      <ExternalLink href={link}>
        <Heading element="h3" className={styles.heading}>
          {heading}
        </Heading>
        <Text className={styles.text} text={text} />
      </ExternalLink>
      {command ? (
        <CopyBox className={styles['copy-box']}>{command}</CopyBox>
      ) : null}
    </div>
  );
}
