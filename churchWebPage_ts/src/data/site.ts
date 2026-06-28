export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  title: string;
  description: string;
  headerImage: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  title: "达拉斯第一浸信会华人团契",
  description: "The Chinese Fellowship, A Ministry Of First Baptist Church Dallas",
  headerImage: "/wp-content/uploads/2023/06/church_pooto.jpeg",
  navItems: [
  {
    "label": "首页",
    "href": "/"
  },
  {
    "label": "认识我们",
    "href": "/about/",
    "children": [
      {
        "label": "教会历史",
        "href": "/教会历史/"
      },
      {
        "label": "教会信条",
        "href": "/教会信条/"
      },
      {
        "label": "教会牧者",
        "href": "/教会牧者/"
      }
    ]
  },
  {
    "label": "聚会时间",
    "href": "/聚会时间/",
    "children": [
      {
        "label": "Sunday周日",
        "href": "/sunday周日/"
      },
      {
        "label": "Friday周五团契",
        "href": "/friday周五团契/"
      }
    ]
  },
  {
    "label": "儿童和青少年事工",
    "href": "/儿童和青少年事工/"
  },
  {
    "label": "感想随笔",
    "href": "/感想随笔/"
  },
  {
    "label": "活动照片",
    "href": "/活动照片/"
  },
  {
    "label": "教会奉献",
    "href": "/教会奉献/"
  },
  {
    "label": "教会通知",
    "href": "/教会通知/"
  },
  {
    "label": "联系我们",
    "href": "/contact/"
  }
],
};
