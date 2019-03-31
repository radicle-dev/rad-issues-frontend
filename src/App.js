import React, { Component } from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import Comment from './components/Comment';
import Picker from './components/Picker';
import Filter from './components/Filter';
import { colors } from './utils';
import request from "request";
import ReactMarkdown from "react-markdown";

export default class App extends Component {

  // state = {issues: {}, error: null };
  state = {issues: {
  "0": {
    "state": "open",
    "created-at": "2019-03-11T16:37:34Z",
    "body": "We should port over existing issues from our older machine. The issue machine definition changed somewhat in the meantime",
    "git-username": "Julian K. Arni",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.002238650368766e+76,
          8.721626698298374e+76
        ]
      }
    ],
    "labels": [],
    "comments": [
      {
        "created-at": "2019-03-13T10:05:33Z",
        "body": "That would be great!",
        "git-username": "Thomas Scholtes",
        "author": [
          "public-key",
          {
            "public_curve": [
              "curve-fP",
              [
                "curve-prime",
                1.157920892373162e+77,
                [
                  "curve-common",
                  {
                    "ecc_g": [
                      "point",
                      5.5066263022277344e+76,
                      3.2670510020758816e+76
                    ],
                    "ecc_a": 0,
                    "ecc_n": 1.157920892373162e+77,
                    "ecc_h": 1,
                    "ecc_b": 7
                  }
                ]
              ]
            ],
            "public_q": [
              "point",
              3.4060272809073986e+76,
              1.0944293623742895e+77
            ]
          }
        ],
        "modified-at": "2019-03-13T10:05:33Z"
      }
    ],
    "title": "Move over issues from old machine",
    "number": 0,
    "modified-at": "2019-03-11T16:37:34Z"
  },
  "1": {
    "state": "open",
    "created-at": "2019-03-11T16:39:07Z",
    "body": "Currently things like `rad issue list | wc -l` won't work, since we're outputting directly to tty. That sucks. \n\n(As a note, in the meantime `script -q -c 'rad issue list'` can be used",
    "git-username": "Julian K. Arni",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.002238650368766e+76,
          8.721626698298374e+76
        ]
      }
    ],
    "labels": [],
    "comments": [],
    "title": "Don't use /dev/tty for script output",
    "number": 1,
    "modified-at": "2019-03-11T16:39:07Z"
  },
  "2": {
    "state": "closed",
    "created-at": "2019-03-13T10:17:28Z",
    "body": "They still throw an exception, so readers never witness the broken *semantics*, but it means the machine becomes unusable.",
    "git-username": "Julian K. Arni",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.002238650368766e+76,
          8.721626698298374e+76
        ]
      }
    ],
    "labels": [],
    "comments": [
      {
        "created-at": "2019-03-14T16:31:45Z",
        "body": "This has been fixed.",
        "git-username": "Julian K. Arni",
        "author": [
          "public-key",
          {
            "public_curve": [
              "curve-fP",
              [
                "curve-prime",
                1.157920892373162e+77,
                [
                  "curve-common",
                  {
                    "ecc_g": [
                      "point",
                      5.5066263022277344e+76,
                      3.2670510020758816e+76
                    ],
                    "ecc_a": 0,
                    "ecc_n": 1.157920892373162e+77,
                    "ecc_h": 1,
                    "ecc_b": 7
                  }
                ]
              ]
            ],
            "public_q": [
              "point",
              3.002238650368766e+76,
              8.721626698298374e+76
            ]
          }
        ],
        "modified-at": "2019-03-14T16:31:45Z"
      }
    ],
    "title": "Invalid expresions are sometimes accepted",
    "number": 2,
    "modified-at": "2019-03-14T16:32:01Z"
  },
  "3": {
    "state": "open",
    "created-at": "2019-03-13T11:49:10Z",
    "body": "When the project type is unknown: `first: head of empty list`.",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.2367152352263765e+76,
          1.6527898649970052e+75
        ]
      }
    ],
    "labels": [],
    "comments": [
      {
        "created-at": "2019-03-13T12:54:48Z",
        "body": "Could you provide more details, James?. Maybe steps how to reproduce this?",
        "git-username": "Thomas Scholtes",
        "author": [
          "public-key",
          {
            "public_curve": [
              "curve-fP",
              [
                "curve-prime",
                1.157920892373162e+77,
                [
                  "curve-common",
                  {
                    "ecc_g": [
                      "point",
                      5.5066263022277344e+76,
                      3.2670510020758816e+76
                    ],
                    "ecc_a": 0,
                    "ecc_n": 1.157920892373162e+77,
                    "ecc_h": 1,
                    "ecc_b": 7
                  }
                ]
              ]
            ],
            "public_q": [
              "point",
              3.4060272809073986e+76,
              1.0944293623742895e+77
            ]
          }
        ],
        "modified-at": "2019-03-13T12:54:48Z"
      }
    ],
    "title": "rad project fails with cryptic error",
    "number": 3,
    "modified-at": "2019-03-13T11:49:10Z"
  },
  "4": {
    "state": "open",
    "created-at": "2019-03-13T12:13:39Z",
    "body": "The timeout might not be set to wait long enough.",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.2367152352263765e+76,
          1.6527898649970052e+75
        ]
      }
    ],
    "labels": [],
    "comments": [],
    "title": "IPFS pubsub seems to timeout even on success",
    "number": 4,
    "modified-at": "2019-03-13T12:13:39Z"
  },
  "5": {
    "state": "open",
    "created-at": "2019-03-13T12:23:27Z",
    "body": "E.g. adding a comment to an issue does not update the `:modified-at` of the issue.",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.2367152352263765e+76,
          1.6527898649970052e+75
        ]
      }
    ],
    "labels": [],
    "comments": [],
    "title": "Changes to comments do not update `:modified-at`.",
    "number": 5,
    "modified-at": "2019-03-13T12:23:27Z"
  },
  "6": {
    "state": "open",
    "created-at": "2019-03-13T14:04:15Z",
    "body": "TODO:\n\n- Add some docs to the help commands about this.\n- Add command to mark an item as read.\n- Add command to bulk mark items as read.\n- Add options/flags to the `list` command for only showing new items.",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.2367152352263765e+76,
          1.6527898649970052e+75
        ]
      }
    ],
    "labels": [],
    "comments": [
      {
        "created-at": "2019-03-15T11:24:02Z",
        "body": "added docs",
        "git-username": "James Henri Haydon",
        "author": [
          "public-key",
          {
            "public_curve": [
              "curve-fP",
              [
                "curve-prime",
                1.157920892373162e+77,
                [
                  "curve-common",
                  {
                    "ecc_g": [
                      "point",
                      5.5066263022277344e+76,
                      3.2670510020758816e+76
                    ],
                    "ecc_a": 0,
                    "ecc_n": 1.157920892373162e+77,
                    "ecc_h": 1,
                    "ecc_b": 7
                  }
                ]
              ]
            ],
            "public_q": [
              "point",
              3.002238650368766e+76,
              8.721626698298374e+76
            ]
          }
        ],
        "modified-at": "2019-03-15T11:24:02Z"
      }
    ],
    "title": "Improvements to newness tracking",
    "number": 6,
    "modified-at": "2019-03-13T14:04:15Z"
  },
  "7": {
    "state": "closed",
    "created-at": "2019-03-13T14:10:31Z",
    "body": "Pick a body",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.2367152352263765e+76,
          1.6527898649970052e+75
        ]
      }
    ],
    "labels": [],
    "comments": [
      {
        "created-at": "2019-03-14T12:42:03Z",
        "body": "a test comment",
        "git-username": "Thomas Scholtes",
        "author": [
          "public-key",
          {
            "public_curve": [
              "curve-fP",
              [
                "curve-prime",
                1.157920892373162e+77,
                [
                  "curve-common",
                  {
                    "ecc_g": [
                      "point",
                      5.5066263022277344e+76,
                      3.2670510020758816e+76
                    ],
                    "ecc_a": 0,
                    "ecc_n": 1.157920892373162e+77,
                    "ecc_h": 1,
                    "ecc_b": 7
                  }
                ]
              ]
            ],
            "public_q": [
              "point",
              3.4060272809073986e+76,
              1.0944293623742895e+77
            ]
          }
        ],
        "modified-at": "2019-03-14T12:42:03Z"
      }
    ],
    "title": "Pick a title",
    "number": 7,
    "modified-at": "2019-03-13T14:17:29Z"
  },
  "8": {
    "state": "open",
    "created-at": "2019-03-13T14:43:44Z",
    "body": "By default they should not be listed. A summary should be displayed to indicate how many there are.",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.2367152352263765e+76,
          1.6527898649970052e+75
        ]
      }
    ],
    "labels": [],
    "comments": [],
    "title": "Closed/retracts issues/patches should not be shown",
    "number": 8,
    "modified-at": "2019-03-13T14:43:44Z"
  },
  "9": {
    "state": "open",
    "created-at": "2019-03-14T14:31:37Z",
    "body": "For issues and patches machines.",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.002238650368766e+76,
          8.721626698298374e+76
        ]
      }
    ],
    "labels": [],
    "comments": [],
    "title": "Add auth commands",
    "number": 9,
    "modified-at": "2019-03-14T14:31:37Z"
  },
  "10": {
    "state": "open",
    "created-at": "2019-03-14T15:01:36Z",
    "body": "Before inputs are send to the machines, the Daemon should query \nlocally if the are valid. This way we can show better error messages.",
    "git-username": "Merle Breitkreuz",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          1.015641336030851e+77,
          7.990509373762292e+76
        ]
      }
    ],
    "labels": [],
    "comments": [],
    "title": "Validate inputs before sending them",
    "number": 10,
    "modified-at": "2019-03-14T15:01:36Z"
  },
  "11": {
    "state": "closed",
    "created-at": "2019-03-15T11:11:23Z",
    "body": "`radicle: /bin/sh: createProcess: runInteractiveProcess: pipe: resource exhausted (Too many open files)`\nhappened in `radicle-garden` on rad patch list` ",
    "git-username": "Merle Breitkreuz",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          1.015641336030851e+77,
          7.990509373762292e+76
        ]
      }
    ],
    "labels": [],
    "comments": [
      {
        "created-at": "2019-03-20T09:26:12Z",
        "body": "Fixed in https://github.com/radicle-dev/radicle/pull/579",
        "git-username": "Merle Breitkreuz",
        "author": [
          "public-key",
          {
            "public_curve": [
              "curve-fP",
              [
                "curve-prime",
                1.157920892373162e+77,
                [
                  "curve-common",
                  {
                    "ecc_g": [
                      "point",
                      5.5066263022277344e+76,
                      3.2670510020758816e+76
                    ],
                    "ecc_a": 0,
                    "ecc_n": 1.157920892373162e+77,
                    "ecc_h": 1,
                    "ecc_b": 7
                  }
                ]
              ]
            ],
            "public_q": [
              "point",
              1.015641336030851e+77,
              7.990509373762292e+76
            ]
          }
        ],
        "modified-at": "2019-03-20T09:26:12Z"
      }
    ],
    "title": "error on rad patch list",
    "number": 11,
    "modified-at": "2019-03-20T09:27:27Z"
  },
  "12": {
    "state": "open",
    "created-at": "2019-03-19T13:56:19Z",
    "body": "In particular, many functions can be abstracted and moved to `monadic/items.rad`.",
    "git-username": "James Henri Haydon",
    "author": [
      "public-key",
      {
        "public_curve": [
          "curve-fP",
          [
            "curve-prime",
            1.157920892373162e+77,
            [
              "curve-common",
              {
                "ecc_g": [
                  "point",
                  5.5066263022277344e+76,
                  3.2670510020758816e+76
                ],
                "ecc_a": 0,
                "ecc_n": 1.157920892373162e+77,
                "ecc_h": 1,
                "ecc_b": 7
              }
            ]
          ]
        ],
        "public_q": [
          "point",
          3.002238650368766e+76,
          8.721626698298374e+76
        ]
      }
    ],
    "labels": [],
    "comments": [],
    "title": "Extract common code of rad-issue and rad-patch",
    "number": 12,
    "modified-at": "2019-03-19T13:56:19Z"
  }
}
, error: null };

  componentDidMount() {
    // var getOuts = () => {
    //   request(
    //     { uri: "http://replicate.machines.radicle.xyz/v0/machines/12D3KooWP7mz4WKrAwN9LXymnwntxMxj7sUYMCaWodX3EUDWmuVD/query",
    //       method: 'POST',
    //       json: {expression: "(list-issues)"},
    //       headers: {"Content-Type": "application/json",
    //                 "Accept": "application/radicle-json"}
    //     }
    //     , (error, response, body) => {
    //       if (error) {
    //         this.setState({error: error});
    //       } else if (body.error) {
    //         this.setState({error: body.error});
    //       } else {
    //         this.setState({issues: body.result});
    //       }
    //     }
    //   )
    // };
    // setInterval(getOuts, 5000);
  }

  render() {
    const {issues} = this.state;

    return (
      <Container>
        <Header>
          <h1>Radicle issues</h1>
          <MetaContainer>
            {/* <Filter value="Filter" />
            <Picker marginLeft items={['open', 'closed']} /> */}
          </MetaContainer>
        </Header>
        {
          Object.entries(issues)
            // .filter(([number, issue]) => issue.state === "open")
            // .sort((a, b) => a["created-at"] < b["created-at"])
            .map(([number, issue]) =>
            <IssueContainer>
              <div key={number}>
                <Title>#{number} - {issue.title}<Label pass={issue.state === "open"} >{issue.state}</Label></Title>
                <Meta>opened <Timestamp time={issue["created-at"]} /> by {issue["git-username"]}</Meta>
                <Body>
                  <ReactMarkdown source={issue.body}/>
                </Body>
                {issue.comments && issue.comments.map((comment) => <Comment {...comment}/>)}
              </div>
            </IssueContainer>
          )
        }
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${colors.almostWhite};
  font-family: Helvetica, sans-serif;
  color: ${colors.black};
  font-size: 16px;
  padding-top: 24px;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 24px;
  margin: 0 auto 24px;
  max-width: 960px;
  border-radius: 4px;
  h1 {
    font-size: 24px;
    font-weight: bold;
    padding-top: 8px;
  }
`
const IssueContainer = styled.div`
  background-color: ${colors.white};
  padding: 24px;
  margin: 0 auto 24px;
  max-width: 960px;
  border-radius: 4px;
`

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Body = styled.div`
  line-height: 1.5;
  code {
    font-family: monospace;
    background-color: ${colors.almostWhite};
    color: ${colors.darkGrey};
    padding: 2px 4px;
  }
  li {
    list-style-type:disc;
  }
`


const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  font-weight: bold;
`
const Label = styled.span`
  ${({ pass }) =>
    pass
      ? `
      color: ${colors.black};
      background-color: ${colors.green};
    `
      : `
      color: ${colors.white};
      background-color: ${colors.red};
    `};
  font-weight: normal;
  border-radius: 4px;
  padding: 6px 8px 4px 8px;
  height: 36px;
  margin-left: 8px;
`
const Meta = styled.div`
  margin-top: .5em;
  margin-bottom: 1.5em;
  color: ${colors.darkGrey};
`
