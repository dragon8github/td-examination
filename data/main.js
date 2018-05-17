var fs = require('fs')
var path = require('path')

var a = [{ "q": "下面哪个选项不属于“服务”价值观内容？（）", "a": "B、在工作中有前瞻意识，建立新方法、新思路；" }, { "q": "下面哪个选项不属于“服务”价值观内容？（）", "a": "D、对工作进行计划、协调与管控，提升工作效率；" }, { "q": "下面哪个选项是属于“服务”价值观内容？（）", "a": "A、及时跟进客户问题，积极协助并跟踪解决；" }, { "q": "下面哪个选项是属于“服务”价值观内容？（）", "a": "D、深入研究客户的需求及痛点，提供超出客户预期的优质服务；" }, { "q": "客户张先生第一次使用公司的APP，由于对功能与界面操作不熟悉，打电话吐槽公司的APP不好用，客服小雨在仔细倾听了客户遇到的问题后，认真帮客户讲解如何进入客户所要使用的功能页面，帮助客户解决了问题，最终缓和了客户的情绪，随后，小雨把客户的意见反馈给相关产品经理。以上案例看出小雨很好地践行了（）价值观。", "a": "C、服务" }, { "q": "员工A有事外出，A的客户上门投诉，员工B不了解具体情况，但为了不影响大厅其他客户的体验，将客户引导至会议室，安抚其情绪，对给他带来的不好体验表示歉意，并将情况反馈至上级领导，及时解决客户困难，最终获得客户的理解。以上案例体现了B践行了（）价值观。", "a": "D、服务" }, { "q": "积极融入团队，乐意帮助同事，配合团队完成工作；以上行为是（）价值观的体现。", "a": "B、团结" }, { "q": "以下哪个选项是违反服务价值观的行为？（）", "a": "C、面对客户提出的咨询与困惑时，没有热情、耐心地去解答；" }, { "q": "面对客户提出的咨询与困惑时，没有热情、耐心地去解答。这种行为违背了（）价值观。", "a": "C、服务" }, { "q": "在工作中或对外商务中言行不文明，产生不好的影响，损害公司形象；这种行为违背了（）价值观。", "a": "D、服务" }, { "q": "办理业务快捷无误，提升客户体验；出现问题时，积极响应并及时进行反馈，提供最实用合理的解决方案。以上行为践行了（）价值观。", "a": "B、服务" }, { "q": "积极分享专业知识和经验，主动给予同事必要的帮助；以上行为是（）价值观的体现。", "a": "D、团结" }, { "q": "以下哪项是践行“团结”价值观的体现？（）", "a": "B、积极融入团队，乐意帮助同事，配合团队完成工作；" }, { "q": "以下哪项是践行“团结”价值观的体现？（）", "a": "C、团队成员发生矛盾，应从事实、客观的角度化解问题，提升团队凝聚力；" }, { "q": "以下哪项是践行“团结”价值观的体现？（）", "a": "C、积极融入团队，乐意帮助同事，配合团队完成工作；" }, { "q": "以下哪项是践行“团结”价值观的体现？（）", "a": "B、积极分享专业知识和经验，主动给予同事必要的帮助；" }, { "q": "以下哪项是践行“团结”价值观的体现？（）", "a": "D、有主人翁意识，积极正面地影响团队，改善团队士气和氛围；" }, { "q": "尊重不同的意见，为团队提供有效解决方案，并全力配合团队工作；以上行为是（）价值观的体现。", "a": "C、团结" }, { "q": "以下哪项行为违背了“团结”价值观？（）", "a": "A、遇事各自为政，不以完成公司或团队目标为要务；" }, { "q": "以下哪项行为违背了“团结”价值观？（）", "a": "C、到困难，不懂得利用团队的资源，造成结果不尽人意；" }, { "q": "有主人翁意识，积极正面地影响团队，改善团队士气和氛围，团队利益为先，个人利益为后。以上的描述符合（）价值观。", "a": "C、团结" }, { "q": "客户在公司平台选择了一款投资产品，客服小张在了解了客户的需求之后，觉得有另一块的投资产品更加符合客户的需求，于是运用自己的专业知识认真耐心地与客户讲解，客户最终认同了小张的建议，并赞扬小张服务周到。以上案例小张的行为践行了（）价值观。", "a": "B、服务" }, { "q": "与团队隔离，不参与团队活动或讨论；遇到无法解决的困难时，不寻求同事的帮助；是违背了（）价值观。", "a": "C、团结" }, { "q": "善于和不同类型的同事合作，不将个人喜好带入工作，充分体现“对事不对人”的原则；以上行为是（）价值观的体现。", "a": "A、团结" }, { "q": "下列哪一项是公司“团结”价值观的体现：（）", "a": "C、积极帮助新员工了解公司并适应团队" }, { "q": "在同事提出帮助时，不愿意帮助，违背了（）价值观。", "a": "B、团结" }, { "q": "以下哪项行为违背了“团结”价值观？（）", "a": "B、与团队隔离，不参与团队活动或讨论；" }]
var b = [{ "q": "接受并快速适应公司因战略或业务发展需要的任何调整，这种行为践行了（）价值观。", "a": "C、创新" }, { "q": "在工作中有前瞻意识，建立新方法、新思路，该行为很好践行了（）价值观。", "a": "B、创新" }, { "q": "结合目标及任务，不断优化完善现有的工作，是对（）价值观很好地践行。", "a": "D、创新" }, { "q": "墨守成规，在工作上不寻求新的突破，违背了（）价值观。", "a": "C、创新" }, { "q": "无法适应公司因战略或业务发展需要的任何调整，违背了（）价值观 。", "a": "B、创新" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "B、不传播未经证实的消息，不发表不负责任的言论；" }, { "q": "以下表述符合“创新”价值观的是（）", "a": "B、不墨守成规，不断优化完善现有工作；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "C、诚实正直，表里如一；" }, { "q": "以下表述符合“创新”价值观的是（）", "a": "B、接受并快速适应公司因战略或业务发展需要的任何调整；" }, { "q": "以下表述违背“创新”价值观的是（）", "a": "A、墨守成规，在工作上不寻求新的突破；" }, { "q": "以下表述违背“创新”价值观的是（）", "a": "B、无法适应公司因战略或业务发展需要的任何调整；" }, { "q": "以下表述违背“创新”价值观的是（）", "a": "D、墨守成规，在工作上不寻求新的突破；" }, { "q": "A是一名新入职的新员工。面对新工作，A也带来了一些新思路和新方法。在项目启动时，A结合了过去在互联网公司的项目经验并适当进行了改良，打破传统纯线下的操作模式，在项目结束时取得了一致好评。A践行了（）价值观。", "a": "D、创新" }, { "q": "诚实正直，表里如一。此说法符合（）的价值观的描述。", "a": "B、诚信" }, { "q": "不传播未经证实的消息，不发表不负责任的言论，并对未经证实的消息能正面引导是对（）价值观很好地践行。", "a": "C、诚信" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "D、对损害公司利益的不诚信行为做正确有效地制止；" }, { "q": "对损害公司利益的不诚信行为做正确有效地制止是践行了（）价值观。", "a": "B、诚信" }, { "q": "处理任何工作时，做到客观公正，实事求是，不带主观偏见；该行为很好地践行了（）价值观。", "a": "C、诚信" }, { "q": "当面一套，背后一套，言行不一致；该行为违背了（）价值观。", "a": "A、诚信" }, { "q": "某员工在采购物品时，要求店家开具高额发票，以获取报销差额；该行为违背了（）价值观。", "a": "D、诚信" }, { "q": "利用职务之便，窃取、泄露公司的商业秘密。该行为违背了（）价值观。", "a": "B、诚信" }, { "q": "传播未经证实的消息，发表不负责任的言论，该行为违背了（）价值观。", "a": "C、诚信" }, { "q": "主管A发现下级有包装资质欠佳的客户时，视而不见，并伙同下属隐瞒真实情况，主管A与下属的行为违背了（）价值观。", "a": "C、诚信" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "A、诚实正直，表里如一；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "B、表达观点要言之有理，不虚构、不夸大；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "C、不传播未经证实的消息，不发表不负责任的言论；" }, { "q": "以下表述符合“创新”价值观的是（）", "a": "A、在工作中有前瞻意识，建立新方法、新思路；" }, { "q": "表达观点要言之有理，不虚构、不夸大。该行为是（）价值观的体现。", "a": "A、诚信" }, { "q": "勇于承认错误，敢于承担责任，并及时改正是对（）价值观很好地践行。", "a": "D、诚信" }, { "q": "以下表述符合“创新”价值观的是（）", "a": "C、接受并快速适应公司因战略或业务发展需要的任何调整；" }]
var c = [{ "q": "以下表述符合“诚信”价值观的是（）", "a": "B、处理任何工作时，做到客观公正，实事求是，不带主观偏见；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "C、勇于承认错误，敢于承担责任，并及时改正；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "B、利用职务之便，窃取、泄露公司的商业秘密；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "D、当面一套，背后一套，言行不一致；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "C、传播未经证实的消息，发表不负责任的言论；" }, { "q": "员工A换了一个新岗位，但由于对新岗位的不熟悉以及顾虑到未来的发展存在很多不确定性，对于一些新的项目，A没有勇气去尝试和挑战。A的行为违背了（）价值观。", "a": "A、激情" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "A、当面一套，背后一套，言行不一致；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "B、利用职务之便，窃取、泄露公司的商业秘密；" }, { "q": "员工A在进行项目招标时收取某供应商好处，致使其他更符合要求的供应商未能中标。A的行为违背了（）价值观。", "a": "C、诚信" }, { "q": "坚持工作原则，按时保质保量完成本职工作是（）价值观的体现。", "a": "B、责任" }, { "q": "工作中遇到困难和挑战时，不畏难，寻找办法解决，该行为是（）价值观的体现。", "a": "A、责任" }, { "q": "员工A负责一个大项目。项目的筹备时间短、难度要求大。A没有气馁，连夜赶制解决项目难题的方案。在动员会上，他以身作则，用乐观的心态激励团队。A的行为是对（）价值观很好地践行。", "a": "C、激情" }, { "q": "当公司财产、利益受到威胁时，及时保护公司财产免受损失，该行为很好地践行了（）价值观。", "a": "D、责任" }, { "q": "在完成本职工作的前提下，积极参与社会公益活动，该行为是（）价值观的体现。", "a": "B、责任" }, { "q": "给自己不断设定更高的目标，不断地超越目标，这提醒了一种（）价值观。", "a": "D、激情" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "C、坚持工作原则，按时保质保量完成本职工作；" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "A、当公司财产、利益受到威胁时，及时保护公司财产免受损失；" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "C、坚持工作原则，按时保质保量完成本职工作；" }, { "q": "始终以乐观主义的精神和必胜的信念，影响并带动同事和团队，该行为很好地践行了（）价值观。", "a": "C、激情" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "A、当公司财产、利益受到威胁时，及时保护公司财产免受损失；" }, { "q": "以下表述违背“责任”价值观的是（）", "a": "B、对于公司定期组织的社会公益活动，从不关注，从不参与；" }, { "q": "热爱自己的工作，理解、认同、践行公司企业文化是践行了（）价值观。", "a": "A、激情" }, { "q": "热爱公司，顾全大局，不计较个人得失是对（）价值观的践行。", "a": "B、激情" }, { "q": "保持积极乐观的心态，碰到困难和挫折的时候永不放弃是对（）价值观的践行。", "a": "C、激情" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "B、热爱自己的工作，理解、认同、践行公司企业文化；" }, { "q": "时刻牢记使命始终恪守职责，提升专业能力是（）价值观的体现。", "a": "C、责任" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "D、某员工在采购物品时，要求店家开具高额发票，以获取报销差额；" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "D、坚持工作原则，按时保质保量完成本职工作；" }, { "q": "员工A负责某大型活动员工的奖品的看管。临近活动结束，A临时去处理某紧急事项，没有将奖品看管任务交接给他人。等A处理完事项回来，发现奖品不翼而飞。A的行为违背了（）价值观。", "a": "A、责任" }, { "q": "对待工作态度消极，不积极解决问题，得过且过，上班时间做与工作无关的事情，这些行为违背了（）价值观。", "a": "B、激情" }]
var d=  [{ "q": "以下表述符合“激情”价值观的是（）", "a": "C、保持积极乐观的心态，碰到困难和挫折的时候永不放弃；" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "D、始终以乐观主义的精神和必胜的信念，影响并带动同事和团队；" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "A、热爱自己的工作，喜欢挑战有难度的项目，享受工作成就带给自己的喜悦；" }, { "q": "以下表述违背“激情”价值观的是（）", "a": "C、对待工作态度消极，不乐于融入团队，不积极解决问题，得过且过，上班时间做与工作无关的事情；" }, { "q": "人际关系简单，工作遵循对事不对人的原则是对（）价值观的践行。", "a": "B、简单" }, { "q": "工作上追求简单、高效的方式方法是对（）价值观的践行。", "a": "C、简单" }, { "q": "对工作进行计划、协调与管控，进而提升工作效率是对（）价值观的践行。", "a": "D、简单" }, { "q": "根据轻重缓急来安排工作优先级，保证各项工作有序完成是对（）价值观的践行。", "a": "A、简单" }, { "q": "化繁为简，用较小的投入获得较大的工作成果是对（）价值观的践行。", "a": "C、简单" }, { "q": "某中心推行全新的项目需求申报流程，员工A要求所有事项不分大小都要通过申报流程申报，使得原本仅仅需要3分钟就能完成的工作却花了两天时间审批。A的行为违背了（）的价值观。", "a": "D、简单" }, { "q": "某项目涉及部门较多、流程繁琐，需要频繁地跟进、沟通。为简化流程、节约时间，项目负责人A采用钉钉石墨文档，构建项目管控表。每完成一项或者项目有变动时，他就及时更新和共享，以便各成员实时了解项目进度。A的做法践行了（）价值观。", "a": "C、简单" }, { "q": "某中心采用新型培训模式，利用线上直播平台进行培训，一改往常面对面模式，既节省了人工成本，又增加了培训的覆盖面，该中心的做法是（）价值观的体现。", "a": "C、简单" }, { "q": "员工A刚得到晋升，就急于寻求机会好好表现自己，把原来很简单的一件事拆分成若干个方案去汇报，历时几个月，不但没有优化原来的流程，反而将流程变得更加复杂化，浪费了人力物力。员工A的做法违背了（）价值观。", "a": "B、简单" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "B、对工作进行计划、协调与管控，提升工作效率" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "D、根据轻重缓急来安排工作优先级，保证各项工作有序完成；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "B、感恩公司提供的工作与发展的机会，转化为工作动力回报公司；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "C、感恩社会帮助，关注社会发展，关心弱势群体，承担更多的社会责任；" }, { "q": "感谢公司提供的工作与发展的机会，转化为工作动力回报公司，是对（）价值观的践行。", "a": "B、感恩" }, { "q": "感谢客户的支持，为客户提供最优质的服务，这是对（）价值观的描述。", "a": "C、感恩" }, { "q": "感恩社会帮助，关注社会发展，关心弱势群体，承担更多的社会责任，是对（）价值观的践行。", "a": "A、感恩" }, { "q": "将感恩转化为实际行动，在力所能及范围内多帮助别人，是对（）价值观的践行。", "a": "D、感恩" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "A、感恩公司提供的工作与发展的机会，转化为工作动力回报公司；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "A、感恩公司提供的工作与发展的机会，转化为工作动力回报公司；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "B、感谢客户的支持，为客户提供最优质的服务；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "C、化繁为简，用较小的投入获得较大的工作成果；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "B、根据轻重缓急来安排工作优先级，保证各项工作有序完成；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "A、感谢客户的支持，为客户提供最优质的服务；" }]
var e = [{ "q": "通过正确途径、正确的方式表达个人情绪是对（）价值观的践行。", "a": "A、不抱怨" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "A、诚实正直，表里如一；|B、表达观点要言之有理，不虚构、不夸大；" }, { "q": "遇困难能用积极的思维思考，客观分析，寻找解决方法是对（）价值观的践行。", "a": "C、不抱怨" }, { "q": "以下表述违背“创新”价值观的是（）", "a": "B、墨守成规，在工作上不寻求新的突破；|D、无法适应公司因战略或业务发展需要的任何调整；" }, { "q": "公司近期出台的新政策对业务部门的薪酬构成比例进行了调整，员工A认为该调整严重影响了收入，于是在论坛上组织员工匿名吐槽，消极怠工，造成十分不好的影响。A的行为违背了（）价值观。", "a": "C、不抱怨" }, { "q": "以下表述符合“不抱怨”价值观的是（）", "a": "D、通过正确途径、正确的方式表达个人情绪；" }, { "q": "（）是一种良好的工作习惯，遇到问题应通过正确途径去表达个人情绪，积极面对工作。", "a": "D、不抱怨" }, { "q": "自从公司某论坛开通“敢言板块”后，部分员工不论事情大小，纷纷在板块内留言。但是这些帖子并没有附带相关的解决建议，对问题的解决于事无补。一时间，论坛充斥着各种负能量，违背了设立该栏目的初衷。对于员工们的做法违背了（）价值观。", "a": "D、不抱怨" }, { "q": "公司企业文化中共包含（）个价值观。", "a": "C、9" }, { "q": "下列哪一项不属于公司的九大核心价值观（）。", "a": "D、和谐" }, { "q": "以下哪些选项是违反“服务”价值观的行为？（）", "a": "A、与客户沟通或提供服务时，态度消极，敷衍对待；|B、当客户遇到问题，未帮助客户寻求解决问题的办法；|D、面对客户投诉时，情绪激动、抱怨、不冷静；" }, { "q": "关注客户的服务体验重点体现在（）", "a": "A、满意度|B、便利性|C、及时性|D、顺畅性" }, { "q": "为了能让客户体验到更优质的服务，员工应做到（）", "a": "A、提升工作热情|B、端正工作态度|C、提高业务技能|D、培养良好沟通能力" }, { "q": "以下哪些选项是违反“服务”价值观的行为？（）", "a": "A、毁坏公司的形象，向客户散播负面信息；|B、对待客户言行不文明；|C、面对客户异议时，情绪激动、抱怨、不冷静；" }, { "q": "以下表述符合“团结”价值观的是（）", "a": "B、有主人翁意识，积极正面地影响团队，改善团队士气和氛围；|C、以开放的心态主动与团队成员进行沟通与交流；" }, { "q": "以下表述违背“创新”价值观的是（）", "a": "A、墨守成规，在工作上不寻求新的突破；|D、无法适应公司因战略或业务发展需要的任何调整；" }, { "q": "以下表述符合“团结”价值观的是（）", "a": "C、积极融入团队，乐意帮助同事，配合团队完成工作；|D、积极分享专业知识和经验，主动给予同事必要的帮助；" }, { "q": "以下表述符合“创新”价值观的是（）", "a": "B、在工作中有前瞻意识，建立新方法、新思路；|C、不墨守成规，不断优化完善岗位工作；" }, { "q": "以下表述违背“团结”价值观的是（）", "a": "B、在同事提出帮助时，不愿意帮助；|D、在工作上需要对同事进行培训时敷衍了事；" }, { "q": "以下表述违背“团结”价值观的是（）", "a": "A、与团队隔离，不参与团队活动或讨论；|B、遇到无法解决的困难时，不寻求同事的帮助；|D、遇到困难，不懂得利用团队的资源，造成结果不尽人意；" }, { "q": "以下表述违背“团结”价值观的是（）", "a": "A、在团队内部形成小团体，因个人利益主动引导非良性竞争；|D、遇到无法解决的困难时，不寻求同事的帮助；" }, { "q": "以下表述违背“团结”价值观的是（）", "a": "B、在同事提出帮助时，不愿意帮助；|D、遇到无法解决的困难时，不寻求同事的帮助；" }, { "q": "以下表述符合“创新”价值观的是（）", "a": "A、接受并快速适应公司因战略或业务发展需要的任何调整；|B、在工作中有前瞻意识，建立新方法、新思路；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "C、不传播未经证实的消息，不发表不负责任的言论；|D、表达观点要言之有理，不虚构、不夸大；" }, { "q": "面对变化，积极配合各项工作，正面影响、引导他人是对(D)价值观的践行。", "a": "D、不抱怨" }, { "q": "面对变化，理性对待，充分沟通，诚意配合是对（）价值观的践行。", "a": "C、不抱怨" }, { "q": "以下表述符合“团结”价值观的是（）", "a": "A、积极参与团队项目，全力配合团队工作；|B、有新员工加入，积极帮助其了解公司并尽快适应团队氛围；" }, { "q": "以下表述符合“创新”价值观的是（）", "a": "A、在工作中有前瞻意识，建立新方法、新思路；|B、不墨守成规，不断优化完善岗位工作；|D、接受并快速适应公司因战略或业务发展需要的任何调整；" }, { "q": "以下表述违背“团结”价值观的是（）", "a": "A、与团队隔离，不参与团队活动或讨论；遇到无法解决的困难时，不寻求同事的帮助；|C、遇事各自为政，不以完成公司或团队目标为要务，只关注自己个利益得失；" }]
var f = [{ "q": "以下表述符合“诚信”价值观的是（）", "a": "A、对损害公司利益的不诚信行为做正确有效地制止；|C、处理任何工作时，做到客观公正，实事求是，不带主观偏见；" }, { "q": "以下案例哪些是体现“简单”价值观的内容？请选择。（）", "a": "A、某中心响应公司号召，推出无纸化申购，节约纸张，提高审批效率|B、为简化流程、节约时间，项目负责人采用钉钉石墨文档，构建项目管控表|D、为提升工作效率，部门领导要求下属根据“四象限法则”制定每日工作计划，根据轻重缓急来安排工作优先级，保证各项工作有序完成" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "B、表达观点要言之有理，不虚构、不夸大；|C、处理任何工作时，做到客观公正，实事求是，不带主观偏见；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "C、处理任何工作时，做到客观公正，实事求是，不带主观偏见；|D、不传播未经证实的消息，不发表不负责任的言论；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "A、诚实正直，表里如一；|B、对损害公司利益的不诚信行为做正确有效地制止；|C、表达观点要言之有理，不虚构、不夸大；|D、不传播未经证实的消息，不发表不负责任的言论；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "A、化繁为简，用较小的投入获得较大的工作成果；|B、人际关系简单，工作遵循对事不对人的原则；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "A、表达观点要言之有理，不虚构、不夸大；|C、对损害公司利益的不诚信行为做正确有效地制止；|D、同事之间答应的事情，尽全力做到最好；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "B、当面一套，背后一套，言行不一致；|D、传播未经证实的消息，发表不负责任的言论；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "A、推卸工作给他人，却独揽工作成果；|B、当面一套，背后一套，言行不一致；|C、利用职务之便，窃取、泄露公司的商业秘密；|D、传播未经证实的消息，发表不负责任的言论；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "B、工作上追求简单、高效的方式方法；|C、根据轻重缓急来安排工作优先级，保证各项工作有序完成；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "B、当面一套，背后一套，言行不一致；|D、利用职务之便，窃取、泄露公司的商业秘密；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "A、传播未经证实的消息，发表不负责任的言论；|C、利用职务之便，窃取、泄露公司的商业秘密；" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "A、坚持工作原则，按时保质保量完成本职工作；|B、时刻牢记使命始终恪守职责，提升专业能力；|C、当公司财产、利益受到威胁时，及时保护公司财产免受损失；|D、在完成本职工作的前提下，积极参与社会公益活动；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "A、化繁为简，用较小的投入获得较大的工作成果；|C、人际关系简单，工作遵循对事不对人的原则；|D、工作上追求简单、高效的方式方法；" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "B、在完成本职工作的前提下，积极参与社会公益活动；|D、坚持工作原则，按时保质保量完成本职工作；" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "A、热爱自己的工作，理解、认同、践行公司企业文化；|B、保持积极乐观的心态，碰到困难和挫折的时候永不放弃；|C、始终以乐观主义的精神和必胜的信念，影响并带动同事和团队；|D、热爱公司，顾全大局，不计较个人得失；" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "A、保持积极乐观的心态，碰到困难和挫折的时候永不放弃；|B、始终以乐观主义的精神和必胜的信念，影响并带动同事和团队；|D、热爱自己的工作，理解、认同、践行公司企业文化；" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "B、保持积极乐观的心态，碰到困难和挫折的时候永不放弃；|C、热爱公司，顾全大局，不计较个人得失；|D、不断设定更高的目标，不断超越目标；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "A、化繁为简，用较小的投入获得较大的工作成果；|B、对工作进行计划、协调与管控，提升工作效率；|C、工作上追求简单、高效的方式方法；|D、根据轻重缓急来安排工作优先级，保证各项工作有序完成；" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "C、保持积极乐观的心态，碰到困难和挫折的时候永不放弃；|D、始终以乐观主义的精神和必胜的信念，影响并带动同事和团队；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "A、工作上追求简单、高效的方式方法；|B、人际关系简单，工作遵循对事不对人的原则；|C、根据轻重缓急来安排工作优先级，保证各项工作有序完成；|D、化繁为简，用较小的投入获得较大的工作成果；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "A、感恩公司提供的工作与发展的机会，转化为工作动力回报公司；|B、感恩客户的支持，为客户提供最优质的服务；|C、感恩社会帮助，关注社会发展，关心弱势群体，承担更多的社会责任；|D、将感恩转化为实际行动，在力所能及范围内多帮助别人；" }, { "q": "以下表述违背“诚信”价值观的是（）", "a": "B、利用职务之便，窃取、泄露公司的商业秘密；|C、传播未经证实的消息，发表不负责任的言论；|D、当面一套，背后一套，言行不一致；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "B、对工作进行计划、协调与管控，提升工作效率；|C、工作上追求简单、高效的方式方法；|D、化繁为简，用较小的投入获得较大的工作成果；" }, { "q": "以下表述符合“责任”价值观的是（）", "a": "B、在完成本职工作的前提下，积极参与社会公益活动；|C、当公司财产、利益受到威胁时，及时保护公司财产免受损失；|D、时刻牢记使命始终恪守职责，提升专业能力；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "B、表达观点要言之有理，不虚构、不夸大；|C、不传播未经证实的消息，不发表不负责任的言论；|D、诚实正直，表里如一；" }, { "q": "以下表述符合“诚信”价值观的是（）", "a": "A、表达观点要言之有理，不虚构、不夸大；|D、同事之间答应的事情，尽全力做到最好；" }, { "q": "以下表述符合“激情”价值观的是（）", "a": "A、热爱自己的工作，理解、认同、践行公司企业文化；|C、热爱公司，顾全大局，不计较个人得失；|D、保持积极乐观的心态，碰到困难和挫折的时候永不放弃；" }, { "q": "以下表述符合“简单”价值观的是（）", "a": "A、工作上追求简单、高效的方式方法；|D、对工作进行计划、协调与管控，提升工作效率；" }]
var g = [{ "q": "以下表述符合“感恩”价值观的是（）", "a": "A、感恩上级的指导、同事的帮助，互帮互助；|C、将感恩转化为实际行动，在力所能及范围内多帮助别人；|D、感恩客户的支持，为客户提供最优质的服务；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "A、感恩公司提供的工作与发展的机会，转化为工作动力回报公司；|D、将感恩转化为实际行动，在力所能及范围内多帮助别人；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "B、感恩上级的指导、同事的帮助，互帮互助；|C、感恩客户的支持，为客户提供最优质的服务；" }, { "q": "以下表述符合“感恩”价值观的是（）", "a": "A、将感恩转化为实际行动，在力所能及范围内多帮助别人；|B、感恩社会帮助，关注社会发展，关心弱势群体，承担更多的社会责任；" }, { "q": "以下表述符合“不抱怨”价值观的是（）", "a": "C、通过正确途径、正确的方式表达个人情绪；|D、遇困难能用积极的思维思考，客观分析，寻找解决方法；" }, { "q": "以下表述符合“不抱怨”价值观的是（）", "a": "A、面对变化，理性对待，充分沟通，诚意配合；|C、遇困难能用积极的思维思考，客观分析，寻找解决方法；" }, { "q": "以下行为违背了“不抱怨”价值观的是（）", "a": "B、因自己不喜欢吃水果，吐槽公司下午茶没有其他糕点之类的食品|C、因年底考核评分不满意，责怪领导打分不公平" }, { "q": "企业文化考试作为员工日常的一件重要的工作事项，是因为它将关乎员工的（）", "a": "A、转正|B、晋升|C、调薪|D、去留" }, { "q": "小张是X部门的主管，最近在负责一个项目，小组共有四个人参与了项目。某天恰逢项目紧急，而小张约了朋友打球，于是下班后便匆匆赶完球场赴约，为避免打扰，把手机关机。恰逢当天项目突发一些问题，项目组的小刘急忙电话主管小张，然而小张手机一直处于无法接通状态。最后导致被迫暂停，延误了期限。对于小张的行为，违背了公司（）价值观。", "a": "A、责任|B、团结" }, { "q": "员工A接到一项具有挑战性的工作任务。在项目动员会上，A部署工作的同时，抱怨领导安排不合理、时间紧急、资源不足，在团队中传播负能量，打击团队积极性。案例中A违背了那些价值观？（）", "a": "C、团结|D、不抱怨" }]
var arr = [].concat(a, b, c, d, e, f, g)
// console.log(arr);

for (var i = 0; i < arr.length; i++) {
   // 问题
   var q = arr[i].q
   // 答案
   var a = arr[i].a
   // 如果是多条答案的话，是按照 | 分开的。
   var _a = a.split('|')
   // 最终答案
   var aa = ''
   // 循环切割
   for (var j = 0; j < _a.length; j++) {
   		aa += ` - ${_a[j]} \r\n`;
   }
   fs.writeFile(path.join(__dirname, '../README.MD'), `### ${q} \r\n${aa}\r\n`, { flag: 'a' }, function (err) {
   		if (err) throw new Error(err);
   });
}

console.log('success!!');
