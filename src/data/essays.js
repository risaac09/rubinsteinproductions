// Ported from isaacrubinstein.com/writing. These are Isaac's published essays,
// reproduced verbatim (em-dashes and all) because they are authored prose being
// migrated, not new site copy. Each essay body is an ordered list of blocks:
//   { t: 'p' }   paragraph
//   { t: 'q' }   pull-quote
//   { t: 'h' }   sub-heading
// Newest first. Slug matches the old isaacrubinstein.com/writing/<slug>/ path so
// the retired-domain redirect stubs can map one-to-one.

const essays = [
  {
    slug: 'naming-the-question-is-the-work',
    title: 'Naming the question is the work',
    date: 'Apr 29, 2026',
    dateISO: '2026-04-29',
    readtime: '6 min read',
    dek: 'A note from a Jaron Lanier talk at Brown, brought back to the evaluation table: the highest-leverage move in any engagement is the one made before any data is collected.',
    body: [
      { t: 'p', c: 'A few weeks ago I sat in a room at Brown while five speakers thanked each other before Jaron Lanier took the stage. The chair of physics introduced the deputy dean, the deputy dean introduced a Nobel-laureate’s seminar series, the seminar series introduced a former student who introduced Lanier — who had never gone to graduate school, and who began by thanking Brown for not being the other Ivy. By the time Lanier started speaking, the room had already done most of his work for him: it had named the chain of relations the talk depended on, in public, in order.' },
      { t: 'p', c: 'Late in the evening, in response to a Gen-Z student who asked whether AGI was bullshit, Lanier said something that has been with me since. He told the student, more or less kindly, that he had not asked a question. The room laughed. Then Lanier explained why it mattered. Real power relies on the ability to formulate the problems. The schooling we get from teachers, from parents, from large language models, all rewards the production of correct answers to questions that have already been posed. The harder skill, and the more political one, is the act of posing the question in the first place. Power, he said, lies in the ability to define the problem — and, in defining the problem, to set the paradigm through which the world will be examined.' },
      { t: 'p', c: 'I have been thinking about that line for two weeks. It is, almost word for word, what Michael Quinn Patton has been saying about evaluation for forty years.' },
      { t: 'h', c: 'Patton, in plainer clothes' },
      { t: 'p', c: 'The utilization-focused tradition has a single load-bearing rule: identify the named primary user, the actual human whose decision the report exists to inform, and design backwards from there. Most evaluation plans I’ve inherited from previous evaluators do exactly the opposite. They start with the methods — surveys, focus groups, administrative data — and treat the question of what the report needs to change as something to mention in a closing paragraph.' },
      { t: 'p', c: 'By then the design has already foreclosed most of the questions worth asking. The data is structured around what was easiest to collect, not around what would actually move a decision. The methods, having arrived first, decide what counts as a finding. The report comes out, the funder thanks everyone for the report, and the program continues to do whatever it was going to do.' },
      { t: 'q', c: 'The methods, having arrived first, decide what counts as a finding.' },
      { t: 'p', c: 'What Lanier was naming on stage at Brown, and what Patton has been naming in the evaluation literature since the late 1970s, is the same operation in different vocabularies. The political event in any inquiry is the moment the question gets formed. Everything downstream — the methods, the analysis, the report, the headline number — is the working out of an answer to a question that someone, somewhere, decided to pose. That someone has the power. The rest of us are doing math.' },
      { t: 'h', c: 'The question I ask before I take the contract' },
      { t: 'p', c: 'The decision rule I try to hold to in my own engagements is small and unglamorous. Every evaluation I take has, in writing, a single named primary user (or, in larger programs, a small named user group) who can complete the sentence:' },
      { t: 'q', c: '“When I read the report, I will use it to decide ___.”' },
      { t: 'p', c: 'If the named user can’t finish that sentence, we don’t collect data yet. We redesign the question.' },
      { t: 'p', c: 'This sounds austere. In practice it is the most useful five minutes of any engagement. A coalition director who initially asks for “an outcome evaluation” will, when pressed, often realize that what they actually need is evidence to defend a budget line at the next state hearing — and that need produces a very different evaluation than “outcomes.” The named decision rewrites the design. The data collection gets smaller, the analytic question gets sharper, the report gets shorter and more readable. Nothing has been lost; the engagement has been put on the question that the named user can act on.' },
      { t: 'h', c: 'What participation looks like, after the question' },
      { t: 'p', c: 'Once the question is named, the conversation about who else gets to shape it becomes possible. This is where I think a lot of evaluation engagements go quietly wrong. Participation gets discussed as if it were a constant — a posture the engagement either has or doesn’t. In practice it is a set of decisions, each of which can be co-owned with community partners or made by the evaluator alone, and naming which is which is the partnership.' },
      { t: 'p', c: 'Some questions belong to the funder, who is paying for an answer to a specific decision and is entitled to the answer. Some belong to residents, whose lives are the program’s subject and who have authority over how their experience gets framed. Some belong to me, because they are methodological choices that require evaluation training to make well. The work of an honest engagement is to write that division of authority down, in plain language, before any data is collected, and to invite the partners to argue with it.' },
      { t: 'p', c: 'I have had resident leadership councils rewrite my list, moving items from my column into the co-owned column, and I have agreed and moved them. That is the conversation I want. The conversation I don’t want is a vague claim of partnership that quietly excludes residents from the decisions that matter most.' },
      { t: 'h', c: 'The room at Brown, again' },
      { t: 'p', c: 'I keep coming back to that opening at Brown. Five speakers, in order, naming the relations the evening depended on. It looked at first like a scaffold, the kind of academic pre-amble you wait through before the speaker shows up. By the end of the evening it looked more like the most honest thing in the room. The chain was there whether anyone said it aloud or not; saying it aloud changed what the talk was capable of becoming.' },
      { t: 'p', c: 'Evaluation, on a much smaller scale, has the same property. The chain — whose decision the report is for, who is paying, whose data this is, who decides what the findings mean — is there whether we name it or not. The engagements I am proudest of are the ones where I named it first, in writing, before anything else got built. The engagements I learned the most from are the ones where I didn’t.' },
      { t: 'p', c: 'I am still figuring out, in a sober way, how much of this is method and how much of it is something more like a practice. For now I will say only that the question is the work. The methods are how we keep our promises to it.' },
    ],
  },
  {
    slug: 'dashboard-delivery-isnt-dashboard-utilization',
    title: 'Dashboard delivery isn’t dashboard utilization',
    date: 'Apr 29, 2026',
    dateISO: '2026-04-29',
    readtime: '5 min read',
    dek: 'Most evaluations end at the moment the report is sent. The work I’m most often asked to do begins about three weeks later.',
    body: [
      { t: 'p', c: 'A coalition director once told me, almost as an aside, that her team had four dashboards built by four different evaluators in five years and that none of them got opened more than once a quarter. She said this with no bitterness. The dashboards were fine. They had clean visualizations and reasonable indicators. They had simply, in the most practical sense, not become part of how the coalition made decisions.' },
      { t: 'p', c: 'That sentence has stayed with me. It is the cleanest description of a problem evaluators rarely name out loud: dashboard delivery is not dashboard utilization. The two are different operations. The first is what most evaluation contracts pay for. The second is what most programs actually need.' },
      { t: 'h', c: 'The hand-off, and what falls in the gap' },
      { t: 'p', c: 'Most evaluation engagements are scoped to deliver a product. A report. A logic model. A dashboard. A theory of change on a single page. The product is what the contract describes; the product is what the funder reviews; the product is what the invoice is tied to.' },
      { t: 'p', c: 'The problem is that the product is not the change. The change is downstream of the product, in the meeting where the program officer asks staff what the data is showing, in the budget conversation where the dashboard either shapes a decision or doesn’t, in the moment a frontline worker realizes a number on a screen is describing something they have been seeing in their own work for months. None of those moments live inside the deliverable. All of them depend on whether the deliverable was designed for them.' },
      { t: 'p', c: 'The hardest part of public health data, in my experience, is not the analysis. It is getting decision-makers to trust, interpret, and act on what the data reveals. The analysis is what an MPH program teaches you. The trust, interpretation, and action are what the evaluator earns or fails to earn during the engagement — mostly through small choices that don’t make it into the methods section.' },
      { t: 'q', c: 'The product is not the change. The change is downstream of the product, in the meeting where the program officer asks staff what the data is showing.' },
      { t: 'h', c: 'What the facilitation layer actually does' },
      { t: 'p', c: 'What I have started calling, somewhat inelegantly, the facilitation layer is the set of practices that sit between a delivered product and a usable one. It is not a separate methodology. It is a set of habits I try to bake into every engagement, and which I have come to think are the difference between an evaluation that changes a program and one that produces a beautifully designed PDF.' },
      { t: 'p', c: 'A short, partial list of what the facilitation layer does:' },
      { t: 'p', c: 'It treats the dashboard handoff as the beginning of the engagement, not the end. Every dashboard I help build comes with at least two scheduled walkthroughs — one with leadership, one with the staff who will use it — in which we read the dashboard together, in real time, while looking at last week’s actual numbers. The walkthrough is where I find out what the dashboard is missing. The walkthrough is also where staff find out that the dashboard is for them.' },
      { t: 'p', c: 'It builds reading capacity in stages. The first quarterly review with a coalition is rarely about the data. It is about giving everyone in the room a shared vocabulary for the data — what counts as a baseline, what counts as a meaningful change, what to do when an indicator moves in the wrong direction. The data review starts about six months in. By then the room has the equipment to read what it’s seeing.' },
      { t: 'p', c: 'It makes the invisible visible without making the invisible flat. There are things a community knows about itself that a dashboard cannot represent. The facilitation layer holds a place for that knowledge in the same room as the indicators, so that when the two disagree the conversation gets richer rather than thinner. The numbers do not get the last word. Neither do the stories. Both get to participate in the interpretation.' },
      { t: 'h', c: 'A short example, in concrete numbers' },
      { t: 'p', c: 'In Central Providence, the shared measurement system I helped architect spanned more than sixty organizations and tracked fourteen indicators across six health equity domains. The dashboard, by itself, was a useful artifact. The Data Academy that ran alongside it — co-designed with Brown University, conducted in English and Spanish, structured around the questions resident leaders were already asking — was the part that made the dashboard hold. Without the Academy, the dashboard would have been, at best, a quarterly compliance ritual. With it, partner organizations began bringing their own data to the meetings and arguing back.' },
      { t: 'p', c: 'That argument-back was the outcome. The dashboard was the occasion for the argument. The Data Academy was the bridge between the two.' },
      { t: 'h', c: 'What I have stopped pretending is optional' },
      { t: 'p', c: 'For a long time I thought of the facilitation layer as a value-add — the kind of thing a thoughtful evaluator brings to an engagement when there is room in the budget. I no longer think this is honest. The dashboard without the walkthrough produces nothing the program will remember in six months. The report without the staff briefing produces nothing the funder will reference at the next planning cycle.' },
      { t: 'p', c: 'If I cannot get the facilitation layer into the scope of work, I would rather not take the engagement. The deliverable, on its own, is not the work. The deliverable is the artifact that records the work. Dashboard delivery and dashboard utilization are different operations, and an evaluator who is paid for the first but expected to produce the second is being asked to do the harder job for free. I have done that job for free, more than once. I would rather, now, name it in the contract.' },
    ],
  },
]

export default essays
export const getEssay = slug => essays.find(e => e.slug === slug)
