'use client';

import { useMemo, useState } from 'react';
import { decodeSchemeName, defaultRules, exampleCases } from '../lib/rules';

export default function HomePage() {
  const [schemeName, setSchemeName] = useState(
    'HDFC Large and Mid Cap Fund Direct Growth'
  );

  const result = useMemo(() => {
    return decodeSchemeName(schemeName, defaultRules);
  }, [schemeName]);

  return (
    <main className="container">
      <div className="header">
        <h1 className="title">Indian Mutual Fund Scheme Name Decoder</h1>
        <p className="subtitle">
          Enter an Indian mutual fund scheme name and this tool will break down
          what each meaningful part of the name likely represents.
        </p>
      </div>

      <div className="card">
        <p className="section-title">Search</p>
        <input
          className="input"
          value={schemeName}
          onChange={(e) => setSchemeName(e.target.value)}
          placeholder="Type a mutual fund scheme name..."
        />
      </div>

      <div className="card">
        <p className="section-title">Decoded summary</p>
        <p>{result.summary}</p>
      </div>

      {result.immediateTells.length > 0 && (
        <div className="card">
          <p className="section-title">What the name tells you immediately</p>
          <ul>
            {result.immediateTells.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="card">
        <p className="section-title">Decoded components</p>

        {result.findings.length > 0 ? (
          result.findings.map((item, index) => (
            <div className="finding" key={`${item.token}-${index}`}>
              <strong>{item.token}</strong>
              <p><strong>{item.label}</strong></p>
              <p>{item.meaning}</p>
              <p>{item.explanation}</p>
            </div>
          ))
        ) : (
          <p>No matching components found yet.</p>
        )}
      </div>

      {result.unmatched.length > 0 && (
        <div className="card">
          <p className="section-title">Unmatched words</p>
          <p>{result.unmatched.join(', ')}</p>
        </div>
      )}

      <div className="card">
        <p className="section-title">What the name cannot tell you</p>
        <ul>
          {result.limits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <p className="section-title">Example scheme names</p>
        {exampleCases.map((example) => {
          const exampleResult = decodeSchemeName(example, defaultRules);
          return (
            <div key={example} className="finding">
              <p><strong>{example}</strong></p>
              <p>{exampleResult.summary}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
