import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '海龙出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'blog',
          title: '个人博客',
          href: 'https://mikw.gitee.io/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />海龙GitHub</>,
          href: 'https://github.com/MHaiLong',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
