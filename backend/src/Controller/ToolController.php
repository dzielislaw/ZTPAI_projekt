<?php

namespace App\Controller;

use App\Entity\Tool;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ToolController extends AbstractController
{
//    #[Route('/api/tool/{id}', name: 'app_tool', methods: 'GET')]
//    public function index(EntityManagerInterface $entityManager, $id): Response
//    {
//        $tool = $entityManager->getRepository(Tool::class)->find($id);
//
//        return $this->json(
//            $tool,
//            headers: ['Content-Type:' => 'application/json;charset=UTF-8']
//        );
//    }
}
